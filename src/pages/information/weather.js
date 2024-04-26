import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
const Weather = ({ data }) => {
  return (
    <>
      <Layout layoutData={data.allContentfulLayout.nodes[0]}>
        <div>weather</div>
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

export default Weather;

export const Head = () => <title>Weather Page</title>;
