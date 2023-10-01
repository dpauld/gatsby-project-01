// Step 1: Import React
import * as React from "react";
import Layout from "../component/Layout";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout>
      <main>
        <h1>About Me</h1>
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </main>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

// Step 3: Export your component
export default AboutPage;
