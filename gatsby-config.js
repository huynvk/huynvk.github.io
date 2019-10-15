let contentfulConfig

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require("./.contentful")
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken:
    process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the delivery token need to be provided."
  )
}

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
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 1020,
              showCaptions: true,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
  ],
}
