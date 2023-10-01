import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import ReactDOM from "react-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BrowserRouter } from "react-router-dom";

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query WebSiteInfo {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `);
  // console.log("From Navbar:\n");
  // console.log(data);
  const { title } = data.site.siteMetadata;
  return (
    // <BrowserRouter>
    <nav>
      <h1>{title}</h1>
      <div className='links'>
        {/* <Link to='/'>
        <span />
        <span>Gatsby Starter Contentful</span>
      </Link> */}
        <Link to='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/projects'>Projects</Link>
        <Link to='/blog'>Blog</Link>
        <AnchorLink href='#contact'>Contact</AnchorLink>
      </div>
    </nav>
    // </BrowserRouter>
  );
};

export default Navbar;
