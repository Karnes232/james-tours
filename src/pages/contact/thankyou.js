import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { graphql } from "gatsby";
import HeroImageComponent from "../../components/HeroImageComponent/HeroImageComponent";

const Thankyou = ({ data }) => {
  const [name, setName] = useState("");
  useEffect(() => {
    const searchParams = new URLSearchParams(document.location.search);
    setName(searchParams.get("name"));
  }, []);
  return (
    <>
      {" "}
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
        <main className="">
          <div className="flex flex-col items-center max-w-xs xl:max-w-sm mx-auto">
            <div classNam="">
              <div className="flex flex-col justify-center items-center text-slate-600 ">
                <div className="text-2xl xl:text-4xl font-serif text-center mt-6">
                  Thank you {name}, our team will reach out to you shortly!
                </div>

                <div className="text-center text-sm xl:text-base mt-2 xl:mt-6">
                  Please feel free to{" "}
                  <a
                    href={`mailto:${data.allContentfulLayout.nodes[0].email}`}
                    aria-label="Gmail"
                    rel="noreferrer"
                    className="underline"
                  >
                    contact us
                  </a>{" "}
                  with any questions or concerns.
                </div>
              </div>
            </div>
          </div>
        </main>
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
  }
`;

export default Thankyou;