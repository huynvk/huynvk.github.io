module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@src": "src",
          "@pages": "src/pages",
          "@components": "src/components",
          "@utils": "src/utils",
          "@constants": "src/constants",
          "@templates": "src/templates",
        },
        extensions: [],
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.ts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Huy Ngo`,
        short_name: `huynvk`,
        start_url: `/`,
        background_color: `#222`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `static/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
