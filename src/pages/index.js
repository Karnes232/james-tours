import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import HeroImageComponent from "../components/HeroImageComponent/HeroImageComponent";
import TextComponent from "../components/TextComponent/TextComponent";
import SwiperCarousel from "../components/SwiperCarouselComponent/SwiperCarousel";
import CatagoryCardComponent from "../components/CatagoryCardComponent/CatagoryCardComponent";
import FaqsComponent from "../components/FaqsComponent/FaqsComponent";
import SecondaryImage from "../components/SecondaryImageComponent/SecondaryImage";

const IndexPage = ({ data }) => {
  return (
    <Layout layoutData={data.allContentfulLayout.nodes[0]}>
      <HeroImageComponent
        image={
          data.allContentfulPageLayout.edges[0].node.pageHeroImage.gatsbyImage
        }
        effectImage={data.allContentfulAsset.edges[0].node.gatsbyImage}
        title={data.allContentfulLayout.nodes[0].tourCompanyName}
      />
      <div className="xl:my-20">
        <TextComponent
          title={data.allContentfulPageLayout.edges[0].node.title1}
          titleClassName="mt-5 2xl:mt-10 text-3xl md:text-4xl lg:text-6xl font-zeyada text-primary-color"
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
      <CatagoryCardComponent
        categories={data.allContentfulTourCategoryList.edges}
        link="/tours"
      />
      <SwiperCarousel
        photoList={
          data.allContentfulSwiperPhotoCarousel.edges[0].node.photoList
        }
        effectImage={data.allContentfulAsset.edges[0].node.gatsbyImage}
      />
      <FaqsComponent faqs={data.allContentfulFaqsComponent.edges} />
      <div className="flex flex-col lg:flex-row max-w-5xl mx-auto space-x-8">
        <div className="flex justify-center items-center lg:w-[60rem] xl:w-[70rem] 2xl:w-[80rem]">
          <SecondaryImage
            image={data.allContentfulPageLayout.edges[0].node.secondaryImage}
          />
        </div>
        <div className="flex flex-col xl:h-[40rem] justify-center">
          <TextComponent
            title={data.allContentfulPageLayout.edges[0].node.title3}
            titleClassName="mt-5 2xl:mt-10 text-3xl md:text-4xl lg:text-5xl font-zeyada text-primary-color"
          />
          <TextComponent
            title={data.allContentfulPageLayout.edges[0].node.title4}
            paragraph={
              data.allContentfulPageLayout.edges[0].node.paragraph3.paragraph3
            }
            titleClassName="mb-5 2xl:mb-10 text-3xl md:text-4xl lg:text-6xl font-lato"
            paragraphClassName="mb-4 lg:mb-0 xl:text-xl"
          />
        </div>
      </div>
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
          title3
          title4
          paragraph1 {
            paragraph1
          }
          paragraph2 {
            paragraph2
          }
          paragraph3 {
            paragraph3
          }
          secondaryImage {
            gatsbyImage(formats: WEBP, width: 1500)
            title
          }
        }
      }
    }
    allContentfulTourCategoryList {
      edges {
        node {
          category
          url
          categoryImage {
            gatsbyImage(formats: WEBP, width: 400)
            title
          }
        }
      }
    }
    allContentfulFaqsComponent {
      edges {
        node {
          question
          answer {
            answer
          }
        }
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <title>Home Page</title>;
