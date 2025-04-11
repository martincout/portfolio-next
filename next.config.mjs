/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig = {
    
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.githubassets.com',
            }
        ]
    }
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
