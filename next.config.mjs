/** @type {import('next').NextConfig} */
const nextConfig = {
  // Устранение предупреждения о неверном корне workspace при output file tracing
  outputFileTracingRoot: process.cwd(),
  // Включаем standalone для минимального рантайма без полного node_modules
  output: "standalone",
  // Явно отключаем добавление завершающего слеша, чтобы избегать лишних 3xx
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
