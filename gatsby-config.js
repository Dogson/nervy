var netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },
}

module.exports = {
  siteMetadata: {
    title: 'Nervy',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'img',
      },
    },
    netlifyCmsPaths, // Including in your Gatsby plugins will transform any paths in your frontmatter
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`
      // options: {
      //     includePaths: ["src/styles"]
      // }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          netlifyCmsPaths, // Including in your Remark plugins will transform any paths in your markdown body
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 930,
              backgroundColor: 'transparent', // required to display blurred image first
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
