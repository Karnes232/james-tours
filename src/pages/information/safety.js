import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import Seo from "../../components/SEO/seo";
import HeroImageComponent from "../../components/HeroImageComponent/HeroImageComponent";
import useWindowWidth from "../../customHooks/useWindowWidth";
import TextComponent from "../../components/TextComponent/TextComponent";
import SecondaryHero from "../../components/SecondaryImageComponent/SecondaryHero";
const Safety = ({ data }) => {
  console.log(data.allContentfulPageLayout.edges[0].node.paragraph3);
  const winWidth = useWindowWidth();
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
          short={winWidth > 600 ? false : true}
        />
        <div className="my-10 xl:my-15 mx-5">
          <TextComponent
            title={data.allContentfulPageLayout.edges[0].node.title2}
            paragraph={
              data.allContentfulPageLayout.edges[0].node.paragraph1.paragraph1
            }
            titleClassName="my-5 2xl:mb-10 text-5xl md:text-6xl lg:text-8xl font-zeyada text-primary-color"
            paragraphClassName="mb-4 lg:mb-0 xl:text-xl"
          />
          <TextComponent
            title={data.allContentfulPageLayout.edges[0].node.title3}
            paragraph={
              data.allContentfulPageLayout.edges[0].node.paragraph2.paragraph2
            }
            titleClassName="my-5 2xl:mb-10 text-5xl md:text-6xl lg:text-8xl font-zeyada text-primary-color"
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
        <div className="my-10 xl:my-15 mx-5">
          <TextComponent
            title={data.allContentfulPageLayout.edges[0].node.title4}
            titleClassName="my-5 2xl:mb-10 text-5xl md:text-6xl lg:text-8xl font-zeyada text-primary-color"
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
    allContentfulSeo(filter: { page: { eq: "Safety" } }) {
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
    allContentfulPageLayout(filter: { pageName: { eq: "Safety" } }) {
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

export default Safety;

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
      <link rel="canonical" href="https://puntacanatourstore.com/safety" />
    </>
  );
};
