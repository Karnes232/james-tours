import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
const Cancellation = ({ data }) => {
  return (
    <>
      <Layout layoutData={data.allContentfulLayout.nodes[0]}>
        <div>cancellation</div>
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

export default Cancellation;

export const Head = () => <title>Cancellation Page</title>;
