import type { NextConfig } from 'next';

// Standalone alnadjah : les anciens packages workspace (shared/skins/payments)
// sont vendorisés sous ./vendor et résolus via les alias tsconfig -> compilés
// comme du code applicatif, plus besoin de transpilePackages.
const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.transitsoftservices.com' },
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1',
  },
};

export default nextConfig;
