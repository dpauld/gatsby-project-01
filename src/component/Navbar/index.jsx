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
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/blog'>Blog</Link>
        {/* 3 ways to add Nav Link that scrolls to Contact section of HomePage, The last example does not add #contact at the end of url. But others add it. First 3 with href='/contact' or to="/contact" will produce error. it needs to be #contact. Last one with #contact will produce error*/}
        {/* <a href='/#contact'>Contact1</a> */}
        {/* <Link to='/#contact'>Contact2</Link> */}
        <Link href='/#contact'>Contact</Link>
        {/* <AnchorLink href='/contact'>Contact</AnchorLink> */}
      </div>
    </nav>
    // </BrowserRouter>
  );
};

export default Navbar;
