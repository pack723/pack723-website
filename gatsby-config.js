module.exports = {
  siteMetadata: {
    siteUrl: "https://www.pack723.com",
    title: `Cub Scout Pack 723`,
    description: `Bethel Cub scout Pack 723 of Greensboro, NC`,
    author: `M Lamont Taylor`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
