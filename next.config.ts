import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['picsum.photos', 'localhost', 'sns-public-prod.s3.eu-central-1.amazonaws.com'],
  },
};

export default nextConfig;
