const nextConfig = {
  // output: "export", // turn on static for the web-site
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

