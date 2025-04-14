const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    turbo: {
      enabled: false,
    },
  },
  matcher: "/((?!_next|favicon.ico).*)",
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
