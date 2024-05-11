import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import HeroImageComponent from "../../components/HeroImageComponent/HeroImageComponent";
import TextComponent from "../../components/TextComponent/TextComponent";
import Seo from "../../components/SEO/seo";
const Privacy = ({ data }) => {
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
        />{" "}
        <div className="my-10 xl:my-20 mx-5">
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
    allContentfulSeo(filter: { page: { eq: "Privacy" } }) {
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
  }
`;

export default Privacy;

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
      <link rel="canonical" href="https://puntacanatourstore.com/privacy" />
    </>
  );
};
