const withImages = require("next-images");
module.exports = withImages({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      ]
    })
    return config
  },
  reactStrictMode: true,
  images: {disableStaticImages:true}
})

