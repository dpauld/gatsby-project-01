import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Navbar></Navbar>
      <div className='content'>{children}</div>
      <footer>
        <p>Copywrite 2023 Dipto Dip</p>
      </footer>
    </div>
  );
};

export default Layout;
