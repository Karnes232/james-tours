import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import HeroImageComponent from "../components/HeroImageComponent/HeroImageComponent";

const IndexPage = ({ data }) => {
  // console.log(data.allContentfulPageLayout.edges[0].node)
  return (
    <Layout layoutData={data.allContentfulLayout.nodes[0]}>
      <HeroImageComponent
        image={
          data.allContentfulPageLayout.edges[0].node.pageHeroImage.gatsbyImage
        }
      />
      <main className="h-screen">Yes</main>
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
    allContentfulPageLayout(filter: { pageName: { eq: "Index" } }) {
      edges {
        node {
          pageHeroImage {
            gatsbyImage(formats: WEBP, width: 1500)
          }
          title1
          paragraph1 {
            paragraph1
          }
          paragraph2 {
            paragraph2
          }
        }
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <title>Home Page</title>;
