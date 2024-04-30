import React from "react";
import Layout from "../components/Layout/Layout";
import PhotoGrid from "../components/TourPageComponents/PhotoGrid";

const Tour = ({ pageContext }) => {
  console.log(pageContext.tour);
  return (
    <>
      <Layout
        layoutData={pageContext.layout}
        effectImage={pageContext.effectImage.gatsbyImage}
      >
        <PhotoGrid tourPhotos={pageContext.tour.images} />
        <div className="h-screen"></div>
      </Layout>
    </>
  );
};

export default Tour;
