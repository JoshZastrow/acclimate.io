module.exports = {
  siteMetadata: {
    longName: "Acclimate Consulting",
    shortName: "Acclimate",
    author: "Andrew Wilson",
    siteUrl: `https://www.acclimate.io`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.acclimate.io`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Acclimate Consulting",
        short_name: "Acclimate",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#000000",
        display: "minimal-ui",
        icon: "./src/images/logo.png",
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.svg$/
        }
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-smartypants`,
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-120924365-1", // Google Analytics / GA
        ],
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      }
    },
    `gatsby-plugin-react-helmet`
  ]
};
