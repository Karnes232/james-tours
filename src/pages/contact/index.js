import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout/Layout";
import HeroImageComponent from "../../components/HeroImageComponent/HeroImageComponent";
import ContactForm from "../../components/ContactForm/ContactForm";
import Seo from "../../components/SEO/seo";

const Index = ({ data }) => {
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
          short
        />{" "}
        <ContactForm formName="contact" url="/contact/thankyou/?name=" />
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
    allContentfulPageLayout(filter: { pageName: { eq: "Contact" } }) {
      edges {
        node {
          title1
          pageHeroImage {
            gatsbyImage(placeholder: BLURRED, formats: WEBP, width: 3000)
            title
          }
        }
      }
    }
    allContentfulSeo(filter: { page: { eq: "Contact" } }) {
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
      <link rel="canonical" href="https://puntacanatourstore.com/tours" />
    </>
  );
};

export default Index;
