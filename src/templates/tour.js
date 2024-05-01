import React from "react";
import Layout from "../components/Layout/Layout";
import PhotoGrid from "../components/TourPageComponents/HeroComponent/PhotoGrid";
import TourPageHero from "../components/TourPageComponents/HeroComponent/TourPageHero";

const Tour = ({ pageContext }) => {
  console.log(pageContext.effectImage);
  return (
    <>
      <Layout
        layoutData={pageContext.layout}
        effectImage={pageContext.effectImage.gatsbyImage}
      >
        <TourPageHero
          tour={pageContext.tour}
          effectImage={pageContext.effectImage}
        />

        <div className="h-screen"></div>
      </Layout>
    </>
  );
};

export default Tour;
