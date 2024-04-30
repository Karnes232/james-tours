import React from "react";
import Layout from "../components/Layout/Layout";

const Tour = ({ pageContext }) => {
  console.log(pageContext.tour);
  return (
    <>
      <Layout
        layoutData={pageContext.layout}
        effectImage={pageContext.effectImage.gatsbyImage}
      >
        <div className="h-screen"></div>
      </Layout>
    </>
  );
};

export default Tour;
