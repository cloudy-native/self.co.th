import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Self | Natural Beauty Products`,
    description: `Self - A Thai cosmetics and skincare brand that combines traditional Thai wisdom with modern innovation`,
    author: `@selfcoth`,
    siteUrl: `https://self.co.th`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat:400,500,600,700`, `Open Sans:300,400,600,700`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/content/products`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
  ],
};

export default config;
