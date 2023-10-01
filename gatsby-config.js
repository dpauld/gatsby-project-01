/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Dipto Paul`,
    siteUrl: `https://www.yourdomain.tld`,
    description: "Software Engineer Portfolio",
    contact: "imdpauld@gmail.com",
    copywrite: "This website is copywrite 2023 | Dipto Paul",
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    // "gatsby-plugin-mdx",
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: `projects`,
    //     path: `${__dirname}/src/projects/`,
    //   },
    // },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blogposts`,
        path: `${__dirname}/src/content/blogposts`,
      },
    },
  ],
};
