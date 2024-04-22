import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import HeroImageComponent from "../../components/HeroImageComponent/HeroImageComponent";
import TextComponent from "../../components/TextComponent/TextComponent";
const Privacy = ({ data }) => {
  return (
    <>
      <Layout layoutData={data.allContentfulLayout.nodes[0]}>
        <HeroImageComponent
          image={
            data.allContentfulPageLayout.edges[0].node.pageHeroImage.gatsbyImage
          }
          effectImage={data.allContentfulAsset.edges[0].node.gatsbyImage}
          title={data.allContentfulPageLayout.edges[0].node.title1}
        />{" "}
        <div className="xl:my-20">
          <TextComponent
            paragraph={
              data.allContentfulPageLayout.edges[0].node.paragraph1.paragraph1
            }
            paragraphClassName="mb-4 lg:mb-0 xl:text-xl"
          />
          <TextComponent
            paragraph={
              data.allContentfulPageLayout.edges[0].node.paragraph2.paragraph2
            }
            paragraphClassName="mb-4 lg:mb-0 xl:text-xl"
          />
        </div>
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
    allContentfulPageLayout(filter: { pageName: { eq: "Privacy" } }) {
      edges {
        node {
          title1
          paragraph1 {
            paragraph1
          }
          paragraph2 {
            paragraph2
          }
          pageHeroImage {
            gatsbyImage(placeholder: BLURRED, formats: WEBP, width: 3000)
            title
          }
        }
      }
    }
    allContentfulAsset(filter: { filename: { eq: "effect-shape.png" } }) {
      edges {
        node {
          gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 1500)
          filename
        }
      }
    }
  }
`;

export default Privacy;

export const Head = () => <title>Privacy Page</title>;
