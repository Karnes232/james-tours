import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react'
import Seo from '../../components/SEO/seo';
import Layout from '../../components/Layout/Layout';
import HeroImageComponent from '../../components/HeroImageComponent/HeroImageComponent';
import useWindowWidth from '../../customHooks/useWindowWidth';

const Index = ({ data }) => {
    const winWidth = useWindowWidth();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [guestCount, setGuestCount] = useState("")
    const [tour, setTour] = useState("")
    const [hotel, setHotel] = useState("")
    const [date, setDate] = useState("")
    useEffect(() => {
        const searchParams = new URLSearchParams(document.location.search)
        setName(searchParams.get("name"))
        setEmail(searchParams.get("email"))
        setGuestCount(searchParams.get("guestCount"))
        setTour(searchParams.get("tour"))
        setHotel(searchParams.get("hotel"))
        setDate(searchParams.get("date"))
    }, [])
    console.log(name)
    console.log(email)
    console.log(guestCount)
    console.log(tour)
    console.log(hotel)
    console.log(date)

  return (
    <Layout
      layoutData={data.allContentfulLayout.nodes[0]}
      effectImage={data.allContentfulAsset.edges[0].node.gatsbyImage}
    ><HeroImageComponent
    image={
      data.allContentfulPageLayout.edges[0].node.pageHeroImage.gatsbyImage
    }
    effectImage={data.allContentfulAsset.edges[0].node.gatsbyImage}
    title={data.allContentfulPageLayout.edges[0].node.title1}
    dark
    short={winWidth > 600 ? false : true}
  />

    </Layout>
  )
}

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

export default Index