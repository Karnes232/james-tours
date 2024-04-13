import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
const TermsConditions = ({ data }) => {
  return (
    <>
      <Layout layoutData={data.allContentfulLayout.nodes[0]}>
        <div>termsconditions</div>{" "}
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

export default TermsConditions;

export const Head = () => <title>Terms & Conditions Page</title>;
