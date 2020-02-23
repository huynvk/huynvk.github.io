require("dotenv").config({ path: `.env` })

// Overwrite the Contentful config with environment variables if they exist
const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the delivery token need to be provided."
  )
}

module.exports = {
  siteMetadata: {
    title: `Huy Ngo`,
    author: `Huy Ngo`,
    description: `Personal Blog | Programming and Life`,
    siteUrl: `https://www.huynvk.dev`,
  },
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
          "@styles": "src/styles",
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
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 1020,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              noInlineHighlight: false,
              alias: {
                sh: "bash",
              },
            },
          },
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-158838030-1",
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `huynvk`
      }
    },
  ],
}
