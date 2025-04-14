const nextConfig = {
  images: {
    formats: ["image/webp"],
    dangerouslyAllowSVG: true,
  },
  experimental: {
    serverActions: true,
    turbo: {
      enabled: false,
    },
  },
  async headers() {
    return [
      {
        // Images cache
        source: "/(.*)\\.(jpg|jpeg|png|gif|webp|svg)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Fonts cache
        source: "/(.*)\\.(woff|woff2|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination:
          process.env.VERCEL_ENV === "production"
            ? "/robots-prod.txt"
            : "/robots-dev.txt",
      },
    ];
  },
};

export default nextConfig;
