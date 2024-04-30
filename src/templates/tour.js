import React from "react";
import Layout from "../components/Layout/Layout";
import PhotoGrid from "../components/TourPageComponents/PhotoGrid";

const Tour = ({ pageContext }) => {
  console.log(pageContext.effectImage);
  return (
    <>
      <Layout
        layoutData={pageContext.layout}
        effectImage={pageContext.effectImage.gatsbyImage}
      >
        <PhotoGrid
          tourPhotos={pageContext.tour.images}
          effectImage={pageContext.effectImage}
        />
        <div className="h-screen"></div>
      </Layout>
    </>
  );
};

export default Tour;
