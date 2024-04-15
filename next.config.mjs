/** @type {import('next').NextConfig} */
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

const nextConfig = {
    //domain required to request data/images
    images: {
        remotePatterns: [
            {
                hostname: `${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com`
            },
        ],
    },
    env: {
        AWS_DOMAIN: `${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com`,
    },
};

export default nextConfig;
