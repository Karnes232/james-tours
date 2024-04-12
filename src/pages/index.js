import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";

const IndexPage = ({ data }) => {
  return (
    <Layout layoutData={data.allContentfulLayout.nodes[0]}>
      <main>Yes</main>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allContentfulLayout {
      nodes {
        title
        tourCompanyName
        email
        facebook
        instagram
        tiktok
        logo {
          gatsbyImage(formats: WEBP, width: 400)
        }
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <title>Home Page</title>;
