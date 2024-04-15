import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import HeroImageComponent from "../components/HeroImageComponent/HeroImageComponent";
import TextComponent from "../components/TextComponent/TextComponent";

const IndexPage = ({ data }) => {
  console.log(data.allContentfulSwiperPhotoCarousel.edges[0].node.photoList)
  return (
    <Layout layoutData={data.allContentfulLayout.nodes[0]}>
      <HeroImageComponent
        image={
          data.allContentfulPageLayout.edges[0].node.pageHeroImage.gatsbyImage
        }
        effectImage={data.allContentfulAsset.edges[0].node.gatsbyImage}
      />
      <TextComponent
        title={data.allContentfulPageLayout.edges[0].node.title1}
        paragraph={
          data.allContentfulPageLayout.edges[0].node.paragraph1.paragraph1
        }
        titleClassName="my-5 2xl:mb-2 2xl:mt-10 text-3xl md:text-4xl"
        paragraphClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        paragraph={
          data.allContentfulPageLayout.edges[0].node.paragraph2.paragraph2
        }
        paragraphClassName="mb-4 lg:mb-0"
      />
   
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
    allContentfulAsset(filter: { filename: { eq: "effect-shape.png" } }) {
      edges {
        node {
          gatsbyImage(formats: WEBP, width: 1500)
          filename
        }
      }
    }
    allContentfulSwiperPhotoCarousel(filter: {pageName: {eq: "Index"}}) {
    edges {
      node {
        photoList {
          gatsbyImage(formats: WEBP, width: 1920)
          title
        }
      }
    }
  }
    allContentfulPageLayout(filter: { pageName: { eq: "Index" } }) {
      edges {
        node {
          pageHeroImage {
            gatsbyImage(formats: WEBP, width: 1920)
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
