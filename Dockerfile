# alnadjah — image standalone (Next.js 16 output: 'standalone').
# Build sur le VPS par la feature "site custom" de l'orchestrateur OptiPack :
# git clone -> docker build -> run isolé -> Caddy route les hosts publics.
#
# NEXT_PUBLIC_API_URL est baké au build (passé en --build-arg par l'orchestrateur
# depuis les envVars du site) ; à défaut, le client dérive l'API depuis le
# hostname au runtime (<slug>.<base> -> api.<slug>.<base>).

FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
