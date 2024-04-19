import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import HeroImageComponent from "../components/HeroImageComponent/HeroImageComponent";
import TextComponent from "../components/TextComponent/TextComponent";
import SwiperCarousel from "../components/SwiperCarouselComponent/SwiperCarousel";

const IndexPage = ({ data }) => {
  return (
    <Layout layoutData={data.allContentfulLayout.nodes[0]}>
      <HeroImageComponent
        image={
          data.allContentfulPageLayout.edges[0].node.pageHeroImage.gatsbyImage
        }
        effectImage={data.allContentfulAsset.edges[0].node.gatsbyImage}
      />
      <div className="xl:my-20">
        <TextComponent
          title={data.allContentfulPageLayout.edges[0].node.title1}
          titleClassName="mt-5 2xl:mt-10 text-3xl md:text-4xl lg:text-6xl font-zeyada text-[#F8C05B]"
        />
        <TextComponent
          title={data.allContentfulPageLayout.edges[0].node.title2}
          paragraph={
            data.allContentfulPageLayout.edges[0].node.paragraph1.paragraph1
          }
          titleClassName="mb-5 2xl:mb-10 text-3xl md:text-4xl lg:text-6xl font-lato"
          paragraphClassName="mb-4 lg:mb-0 xl:text-xl"
        />
        <TextComponent
          paragraph={
            data.allContentfulPageLayout.edges[0].node.paragraph2.paragraph2
          }
          paragraphClassName="mb-4 lg:mb-0 xl:text-xl"
        />
      </div>
      <SwiperCarousel
        photoList={
          data.allContentfulSwiperPhotoCarousel.edges[0].node.photoList
        }
        effectImage={data.allContentfulAsset.edges[0].node.gatsbyImage}
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
    allContentfulSwiperPhotoCarousel(filter: { pageName: { eq: "Index" } }) {
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
          title2
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
