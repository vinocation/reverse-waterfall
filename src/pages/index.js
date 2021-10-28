import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
// markup
const IndexPage = () => {
  return (
    <Layout title={"Index"}>
      <h2> this is from index</h2>
      <StaticImage alt="miranda" src="../images/miranda.jpeg" />
    </Layout>
  );
};

export default IndexPage;
