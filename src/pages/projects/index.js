import React from "react";
import Layout from "../../component/Layout";
import { projects } from "../../styles/projects.module.css";

const Projects = () => {
  return (
    <Layout>
      <section className={projects}>
        <div>
          <h2>Portfolio</h2>
          <h3>Projects and stuffs.</h3>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
