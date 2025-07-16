import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "upload.wikipedia.org",
        },
      ],
    }

};

export default nextConfig;
