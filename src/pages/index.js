import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import HeroImageComponent from "../components/HeroImageComponent/HeroImageComponent";
import TextComponent from "../components/TextComponent/TextComponent";
import SwiperCarousel from "../components/SwiperCarouselComponent/SwiperCarousel";
import CatagoryCardComponent from "../components/IndexPageComponents/CatagoryCardComponent/CatagoryCardComponent";
import FaqsComponent from "../components/IndexPageComponents/FaqsComponent/FaqsComponent";
import SecondaryImage from "../components/SecondaryImageComponent/SecondaryImage";
import InformationHero from "../components/IndexPageComponents/InformationComponent/InformationHero";
import HowItWorks from "../components/IndexPageComponents/HowItWorksComponent/HowItWorks";
import Seo from "../components/SEO/seo";

const IndexPage = ({ data }) => {
  return (
    <Layout
      layoutData={data.allContentfulLayout.nodes[0]}
      effectImage={data.allContentfulAsset.edges[0].node.gatsbyImage}
    >
      <HeroImageComponent
        image={
          data.allContentfulPageLayout.edges[0].node.pageHeroImage.gatsbyImage
        }
        effectImage={data.allContentfulAsset.edges[0].node.gatsbyImage}
        title={data.allContentfulLayout.nodes[0].tourCompanyName}
        dark={false}
        short={false}
      />
      <div className="xl:my-20 mx-5">
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
      <div className="flex flex-col lg:flex-row max-w-5xl mx-auto lg:space-x-8">
        <div className="flex justify-center items-center lg:w-[60rem] xl:w-[70rem] 2xl:w-[80rem]">
          <SecondaryImage
            image={data.allContentfulPageLayout.edges[0].node.secondaryImage}
          />
        </div>
        <div className="flex flex-col xl:h-[40rem] justify-center mx-5">
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
      <InformationHero
        backgroundImage={data.allContentfulPageLayout.edges[0].node.thirdImage}
        effectImage={data.allContentfulAsset.edges[0].node.gatsbyImage}
      />
      <HowItWorks data={data.allContentfulHowItWorks.edges[0].node} />
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
        footerBackground {
          gatsbyImage(formats: WEBP, width: 2000, placeholder: BLURRED)
          title
        }
      }
    }
    allContentfulSeo(filter: { page: { eq: "Index" } }) {
      edges {
        node {
          title
          description {
            description
          }
          keywords
          schema {
            internal {
              content
            }
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
            gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 1920)
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
            gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 1500)
            title
          }
          thirdImage {
            gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 1500)
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
    allContentfulHowItWorks {
      edges {
        node {
          title
          step1
          step2
          step3
          step4
          description1 {
            description1
          }
          description2 {
            description2
          }
          description3 {
            description3
          }
          description4 {
            description4
          }
          image1 {
            gatsbyImage(formats: WEBP, width: 100, placeholder: BLURRED)
            title
          }
          image2 {
            gatsbyImage(formats: WEBP, width: 100, placeholder: BLURRED)
            title
          }
          image3 {
            gatsbyImage(formats: WEBP, width: 100, placeholder: BLURRED)
            title
          }
          image4 {
            gatsbyImage(formats: WEBP, width: 100, placeholder: BLURRED)
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;

export const Head = ({ data }) => {
  const { title, description, keywords, schema } =
    data.allContentfulSeo.edges[0].node;
  return (
    <>
      <Seo
        title={title}
        description={description.description}
        keywords={keywords.join(", ")}
        schemaMarkup={schema.internal.content}
      />
      <link rel="canonical" href="https://puntacanatourstore.com/" />
    </>
  );
};
