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
};

export default nextConfig;
