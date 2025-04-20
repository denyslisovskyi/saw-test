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
        destination: "/robots-prod.txt",
      },
    ];
  },
};

export default nextConfig;
