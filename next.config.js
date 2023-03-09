/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = nextConfig;

module.exports = {
  webpack: (config, { isServer }) => {
    // This is needed to avoid issues with server rendering
    if (!isServer) {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|mp4)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/_next/static/videos/",
              outputPath: "static/videos/",
              name: "[name]-[hash].[ext]",
            },
          },
        ],
      });
    }

    return config;
  },
};
