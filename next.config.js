/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/691.png
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname:
          "/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/**",
      },
    ],
  },
};

module.exports = nextConfig;
