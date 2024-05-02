import React from "react";
import Layout from "../components/Layout/Layout";
import TourPageHero from "../components/TourPageComponents/HeroComponent/TourPageHero";
import TextComponent from "../components/TextComponent/TextComponent";
import CheckAvailabilityButton from "../components/TourPageComponents/CheckAvailabilityButton/CheckAvailabilityButton";
import TourInfo from "../components/TourPageComponents/TourInfo";

const Tour = ({ pageContext }) => {
  console.log(pageContext.tour.category);
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
        <div className="max-w-6xl my-5 mx-5 md:mx-10 xl:mx-auto">
          <TourInfo category={pageContext.tour.category} />
          <button
            type="submit"
            // onClick={handleClick}
            className={`bg-primary-color text-secondary-color font-bold py-1 px-4 rounded-full`}
          >
            Book Now
          </button>
        </div>
        <TextComponent
          paragraph={pageContext.tour.shortDescription.shortDescription}
          paragraphClassName="mb-4 lg:mb-0 xl:text-xl"
        />
        <div className="h-screen"></div>
        <CheckAvailabilityButton />
      </Layout>
    </>
  );
};

export default Tour;
