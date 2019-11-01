const postcssCustomMedia = require(`postcss-custom-media`)
module.exports = () => ({
  plugins: [
    postcssCustomMedia({
      importFrom: ["./src/styles/config.screensizes.css"],
    }),
  ],
})
