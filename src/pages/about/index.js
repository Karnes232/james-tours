import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout/Layout";
import Seo from "../../components/SEO/seo";
import HeroImageComponent from "../../components/HeroImageComponent/HeroImageComponent";
import TextComponent from "../../components/TextComponent/TextComponent";
import SecondaryHero from "../../components/SecondaryImageComponent/SecondaryHero";

const Index = ({ data }) => {
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
          title={data.allContentfulLayout.nodes[0].tourCompanyName}
          dark={false}
          short={false}
        />
        <div className="xl:my-20 mx-5">
          <TextComponent
            title={data.allContentfulPageLayout.edges[0].node.title1}
            paragraph={
              data.allContentfulPageLayout.edges[0].node.paragraph1.paragraph1
            }
            titleClassName="mt-5 2xl:mt-10 text-3xl md:text-4xl lg:text-6xl font-zeyada text-primary-color"
            paragraphClassName="mb-4 lg:mb-0 xl:text-xl"
          />
          <TextComponent
            title={data.allContentfulPageLayout.edges[0].node.title2}
            paragraph={
              data.allContentfulPageLayout.edges[0].node.paragraph2.paragraph2
            }
            titleClassName="mt-5 2xl:mt-10 text-3xl md:text-4xl lg:text-6xl font-zeyada text-primary-color"
            paragraphClassName="mb-4 lg:mb-0 xl:text-xl"
          />

          <TextComponent
            title={data.allContentfulPageLayout.edges[0].node.title3}
            paragraph={
              data.allContentfulPageLayout.edges[0].node.paragraph3.paragraph3
            }
            titleClassName="mt-5 2xl:mt-10 text-3xl md:text-4xl lg:text-6xl font-zeyada text-primary-color"
            paragraphClassName="mb-4 lg:mb-0 xl:text-xl"
          />
        </div>
        <SecondaryHero
          backgroundImage={
            data.allContentfulPageLayout.edges[0].node.secondaryImage
          }
          effectImage={data.allContentfulAsset.edges[0].node.gatsbyImage}
          imageClassName=""
        />
        <div className="xl:my-20 mx-5">
          <TextComponent
            title={data.allContentfulPageLayout.edges[0].node.title4}
            titleClassName="mt-5 2xl:mt-10 text-3xl md:text-4xl lg:text-6xl font-zeyada text-primary-color"
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
    allContentfulSeo(filter: { page: { eq: "About" } }) {
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
    allContentfulPageLayout(filter: { pageName: { eq: "About" } }) {
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
  }
`;
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
      <link rel="canonical" href="https://puntacanatourstore.com/about" />
    </>
  );
};

export default Index;
