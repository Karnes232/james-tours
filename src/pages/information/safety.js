import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import Seo from "../../components/SEO/seo";
import HeroImageComponent from "../../components/HeroImageComponent/HeroImageComponent";
import useWindowWidth from "../../customHooks/useWindowWidth";
const Safety = ({ data }) => {
  console.log(data.allContentfulPageLayout.edges[0].node);
  const winWidth = useWindowWidth();
  console.log(winWidth);
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
        <div>Safety</div>
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
