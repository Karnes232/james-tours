import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
const Safety = ({ data }) => {
  return (
    <>
      <Layout layoutData={data.allContentfulLayout.nodes[0]}>
        <div>Safety</div>
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
        footerBackground {
          gatsbyImage(formats: WEBP, width: 2000, placeholder: BLURRED)
          title
        }
      }
    }
  }
`;

export default Safety;

export const Head = () => <title>Safety Page</title>;
