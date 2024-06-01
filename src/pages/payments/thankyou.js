import React, { useEffect, useState } from "react";
import Seo from "../../components/SEO/seo";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import HeroImageComponent from "../../components/HeroImageComponent/HeroImageComponent";
import useWindowWidth from "../../customHooks/useWindowWidth";
import TourCard from "../../components/PaymentComponents/TourCard";

const ThankYou = ({ data }) => {
  const winWidth = useWindowWidth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tour, setTour] = useState("");
  const [deposit, setDeposit] = useState("");
  const [balance, setBalance] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(document.location.search);
    setFirstName(searchParams.get("firstname"));
    setLastName(searchParams.get("lastname"));
    setTour(searchParams.get("tour"));
    setDeposit(searchParams.get("deposit"));
    setBalance(searchParams.get("balance"));
    setGuestCount(searchParams.get("guestCount"));
    setDate(searchParams.get("date"));
  }, []);

  let selectedTour = data.allContentfulTour.edges.find(
    (listedTour) => listedTour.node.name === tour,
  );
  let totalPrice = parseInt(deposit) + parseInt(balance);
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
        title={data.allContentfulPageLayout.edges[0].node.title1}
        dark
        short={winWidth > 600 ? false : true}
      />

      <main className="flex flex-col lg:flex-row lg:gap-24 lg:max-w-6xl lg:mx-auto">
        <div className="flex flex-col items-center max-w-xs xl:max-w-sm mx-auto mb-5">
          <div className="">
            <div className="flex flex-col justify-center items-center text-slate-600 ">
              <div className="text-2xl xl:text-4xl font-serif text-center mt-6">
                Thank you {firstName} {lastName}, our team will reach out to you
                shortly!
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
          <div className="max-w-xs mx-auto lg:mx-0 flex flex-col justify-center">
            <TourCard
              tour={selectedTour?.node}
              guestCount={guestCount}
              date={date}
            />
          </div>
        </div>
      </main>
      <section className="my-5 max-w-xs mx-auto">
        <section className="space-x-16 flex justify-between mx-auto">
          <div className="text-lg font-bold">Total Cost</div>
          <div className="text-lg">${parseInt(totalPrice).toFixed(2)}</div>
        </section>
        <section className="space-x-16 flex justify-between mx-auto my-1">
          <div className="text-lg font-bold">Deposit</div>
          <div className="text-lg">${deposit}</div>
        </section>
        <section className="space-x-16 flex justify-between mx-auto">
          <div className="text-lg font-bold">Remaining Balance</div>
          <div className="text-lg">${parseInt(balance).toFixed(2)}</div>
        </section>
        <div className="text-center text-sm xl:text-base mt-2 xl:mt-6">
          Please note that the remaining balance is to be paid in cash on the
          day of the excusion
        </div>
      </section>
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
    allContentfulSeo(filter: { page: { eq: "Create Reservation" } }) {
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
    allContentfulPageLayout(
      filter: { pageName: { eq: "Create Reservation" } }
    ) {
      edges {
        node {
          pageName
          pageHeroImage {
            gatsbyImage(formats: WEBP, width: 2000, placeholder: BLURRED)
            title
          }
          title1
          title2
          paragraph1 {
            paragraph1
          }
          secondaryImage {
            gatsbyImage(formats: WEBP, width: 2000, placeholder: BLURRED)
            title
          }
        }
      }
    }
    allContentfulTour {
      edges {
        node {
          name
          mainImage {
            gatsbyImage(formats: WEBP, width: 500, placeholder: BLURRED)
            title
          }
          shortDescription {
            shortDescription
          }
          cost
          depositPrice
          category
          url
        }
      }
    }
    allContentfulHotelList {
      edges {
        node {
          hotel
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
        description={description?.description}
        keywords={keywords?.join(", ")}
        schemaMarkup={schema?.internal?.content}
      />
      <link rel="canonical" href="https://puntacanatourstore.com/tours" />
    </>
  );
};
export default ThankYou;
