import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import Seo from "../../components/SEO/seo";
import HeroImageComponent from "../../components/HeroImageComponent/HeroImageComponent";
import TextComponent from "../../components/TextComponent/TextComponent";
import SecondaryHero from "../../components/SecondaryImageComponent/SecondaryHero";
import { FaArrowsRotate } from "react-icons/fa6";
const Airport = ({ data }) => {
  console.log(data.allContentfulPageLayout.edges[0].node);
  return (
    <>
      <Layout
        layoutData={data.allContentfulLayout.nodes[0]}
        effectImage={data.allContentfulAsset.edges[0].node.gatsbyImage}
      >
        <HeroImageComponent
          image={
            data.allContentfulPageLayout.edges[0].node.pageHeroImage.gatsbyImage
          }
          effectImage={data.allContentfulAsset.edges[0].node.gatsbyImage}
          title={data.allContentfulPageLayout.edges[0].node.title1}
          dark
        />
        <div className="my-10 xl:my-15 mx-5">
          <TextComponent
            paragraph={
              data.allContentfulPageLayout.edges[0].node.paragraph1.paragraph1
            }
            paragraphClassName="mb-4 xl:text-xl"
          />
          <TextComponent
            title={data.allContentfulPageLayout.edges[0].node.title2}
            paragraph={
              data.allContentfulPageLayout.edges[0].node.paragraph2.paragraph2
            }
            titleClassName="my-5 2xl:mb-10 text-3xl md:text-4xl lg:text-6xl font-lato"
            paragraphClassName="mb-4 lg:mb-0 xl:text-xl"
          />
        </div>
        <SecondaryHero
          backgroundImage={
            data.allContentfulPageLayout.edges[0].node.secondaryImage
          }
          effectImage={data.allContentfulAsset.edges[0].node.gatsbyImage}
          imageClassName="airplaneImage"
        />
        <div className="my-10 xl:my-15 w-screen sm:hidden">
          <div className="max-w-sm min-w-[22rem] my-5 mx-2 rounded-lg overflow-hidden shadow-lg flex flex-col bg-zinc-50 bg-opacity-60">
            <div className="flex justify-between items-center text-xs font-semibold py-5 px-4 border-b border-gray-300 border-opacity-50 text-gray-500 ">
              <FaArrowsRotate />
              <div className="text-xs">
                Rotate Phone For Arrivals & Departures Information
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 xl:my-15 w-screen hidden sm:block">
          <TextComponent
            title="Arrivals & Departures"
            titleClassName="my-5 2xl:mb-10 text-5xl md:text-6xl lg:text-8xl font-lato text-center font-zeyada text-primary-color"
          />
          <div className="h-72 lg:h-[28rem] ">
            <iframe
              className="w-full h-full"
              src="https://flights.grupopuntacana.com/"
            ></iframe>
          </div>
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
        footerBackground {
          gatsbyImage(formats: WEBP, width: 2000, placeholder: BLURRED)
          title
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
    allContentfulSeo(filter: { page: { eq: "Airport" } }) {
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
    allContentfulPageLayout(filter: { pageName: { eq: "Airport" } }) {
      edges {
        node {
          pageHeroImage {
            gatsbyImage(placeholder: BLURRED, formats: WEBP, width: 3000)
            title
          }
          secondaryImage {
            gatsbyImage(placeholder: BLURRED, formats: WEBP, width: 3000)
            title
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
        }
      }
    }
  }
`;

export default Airport;

export const Head = ({ data }) => {
  const { title, description, keywords, schema } =
    data.allContentfulSeo.edges[0].node;
  return (
    <>
      <Seo
        title={title}
        description={description.description}
        keywords={keywords.join(", ")}
        schemaMarkup={schema?.internal?.content}
      />
      <link rel="canonical" href="https://puntacanatourstore.com/airport" />
    </>
  );
};
