import React from "react";
import Layout from "../component/Layout";
import * as styles from "../styles/blog.module.css";
import { Link, graphql } from "gatsby";
const slugify = require("../component/slugify");

const Blog = ({ data }) => {
  // console.log("from Blogs");
  //console.log(data.allBlogPosts.nodes);
  const blogPosts = data.allBlogPosts.nodes;
  const contact = data.siteInfo.siteMetadata.contact;
  // console.log(data);
  return (
    <Layout>
      <section className={styles.portfolio}>
        <div>
          <h2>Blog</h2>
          <h3>Personal diary and technical articles.</h3>
        </div>
        <div className={styles.blog}>
          {blogPosts.map((post) => (
            <div className={styles.card}>
              {console.log(slugify(post.frontmatter.title))}
              {/* <Link to={"/blog/" + post.frontmatter.slug} key={post.id}> */}
              <Link
                to={"/blog/" + slugify(post.frontmatter.title)}
                key={post.id}
              >
                <div>
                  <h3>{post.frontmatter.title}</h3>
                  <p>
                    {post.frontmatter.tags +
                      " Published:" +
                      post.frontmatter.date +
                      " Author:" +
                      post.frontmatter.author}
                  </p>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.portfolio}>
          <p>Like what you see? Email me at {contact} for a quote</p>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query BlogPostsQuery {
    allBlogPosts: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { date: {}, tags: {} } }
    ) {
      nodes {
        frontmatter {
          author
          date(formatString: "MMMM DD, YYYY", locale: "en")
          slug
          tags
          title
        }
        id
        excerpt
        timeToRead
      }
    }
    siteInfo: site {
      siteMetadata {
        copywrite
        description
        siteUrl
        title
        contact
      }
    }
  }
`;
