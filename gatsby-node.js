const path = require("path");
const slugify = require("./src/component/slugify");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Blogs {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            slug
          }
          id
        }
      }
    }
  `);
  console.log(data);
  data.allMarkdownRemark.nodes.forEach((node) => {
    // console.log(node.id);
    const slugFromTitle = slugify(node.frontmatter.title);
    actions.createPage({
      path: "/blog/" + slugFromTitle,
      component: path.resolve("./src/templates/blog-post-details.js"),
      //this qString variable can be accesible as the graphql query paramter when using running a graphql query in the template file
      context: { qString: node.id },
    });
  });

  //  data.allMarkdownRemark.nodes.forEach((node) => {
  //    actions.createPage({
  //      path: "/blog/" + node.frontmatter.slug,
  //      component: path.resolve("./src/templates/blog-post-details.js"),
  //      contenxt: { slug: node.frontmatter.slug },
  //    });
  //  });
};
