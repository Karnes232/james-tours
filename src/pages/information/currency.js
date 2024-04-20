import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
const Currency = ({ data }) => {
  return (
    <>
      <Layout layoutData={data.allContentfulLayout.nodes[0]}>
        <div>Currency</div>
      </Layout>
    </>
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

export default Currency;

export const Head = () => <title>Currency Page</title>;
