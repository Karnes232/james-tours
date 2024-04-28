import { graphql } from "gatsby";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import HeroImageComponent from "../../components/HeroImageComponent/HeroImageComponent";
import TextComponent from "../../components/TextComponent/TextComponent";
import SecondaryHero from "../../components/SecondaryImageComponent/SecondaryHero";
import TourCard from "../../components/TourCardComponent/TourCard";

const Index = ({ location, data }) => {
  console.log(location.state);
  const backendTourList = data.allContentfulTour.edges;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tourList, setTourList] = useState(
    data.allContentfulTour.edges.sort(() => Math.random() - 0.5),
  );
  let categoryList = ["All"];
  data.allContentfulTourCategoryList.edges.forEach((item) => {
    categoryList.push(item.node.category);
  });

  const setFilter = (category) => {
    setSelectedCategory(category);
    const filteredTourList = backendTourList.filter((tour) => {
      if (category === "All") {
        return tour;
      }
      const categoryList = tour.node.category;
      return categoryList.includes(category);
    });
    setTourList(filteredTourList.sort(() => Math.random() - 0.5));
  };

  const categorySelection = (e) => {
    setFilter(e.target.dataset.category);
  };

  useEffect(() => {
    setFilter(location.state.tourGroup);
  }, []);

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
        />
        <div className="xl:my-20">
          <TextComponent
            title={data.allContentfulPageLayout.edges[0].node.title2}
            titleClassName="mt-5 2xl:mt-10 text-3xl md:text-4xl lg:text-6xl font-zeyada text-primary-color"
            paragraph={
              data.allContentfulPageLayout.edges[0].node.paragraph1.paragraph1
            }
            paragraphClassName="mb-4 lg:mb-0 xl:text-xl"
          />
        </div>
        <SecondaryHero
          backgroundImage={
            data.allContentfulPageLayout.edges[0].node.secondaryImage
          }
          effectImage={data.allContentfulAsset.edges[0].node.gatsbyImage}
        />
        <div>
          <nav className="flex flex-row items-center overflow-x-scroll xl:overflow-x-auto whitespace-nowrap mx-5 lg:justify-center">
            {categoryList.map((category, index) => {
              let active = "";
              if (category === selectedCategory) {
                active = "font-extrabold";
              }
              return (
                <button
                  key={index}
                  data-category={category}
                  onClick={categorySelection}
                  value={category}
                  translate="no"
                  className={`cursor-pointer no-underline flex items-center px-5 h-10 ${active} transition-all duration-300 translatedText `}
                >
                  {category}
                </button>
              );
            })}
          </nav>
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly 2xl:space-x-10 mx-auto">
            {tourList.map((tour, index) => {
              return <TourCard tour={tour} key={index} />;
            })}
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
    allContentfulPageLayout(filter: { pageName: { eq: "Tours" } }) {
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
          price
          category
          url
        }
      }
    }
    allContentfulTourCategoryList {
      edges {
        node {
          category
        }
      }
    }
  }
`;

export const Head = () => <title>Tours Page</title>;

export default Index;
