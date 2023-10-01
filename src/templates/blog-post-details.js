import React from "react";
import Layout from "../component/Layout";
import * as styles from "../styles/blog-post-details.module.css";
import "../styles/blog-post-details.module.css";
import { graphql } from "gatsby";

const BlogPostDetails = ({ data }) => {
  console.log(data);
  const post = data.markdownRemark;
  const { html } = post;
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{post.frontmatter.title}</h2>
        <h3>
          {post.frontmatter.date} | {post.frontmatter.author}
        </h3>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
      </div>
    </Layout>
  );
};

export default BlogPostDetails;

export const query = graphql`
  query BlogPost($qString: String) {
    markdownRemark(id: { eq: $qString }) {
      id
      frontmatter {
        author
        date(formatString: "MMMM DD, YYYY", locale: "en")
        slug
        tags
        title
      }
      timeToRead
      html
      tableOfContents(heading: "", pathToSlugField: "")
    }
  }
`;
