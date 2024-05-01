import React from "react";
import PhotoGrid from "./PhotoGrid";
import HeroImageComponent from "../../HeroImageComponent/HeroImageComponent";

const TourPageHero = ({ tour, effectImage }) => {
  return (
    <>
      <div className="lg:hidden">
        <HeroImageComponent
          image={tour.mainImage.gatsbyImage}
          effectImage={effectImage}
          dark={false}
          short
        />
      </div>
      <div className="hidden lg:block">
        <PhotoGrid tourPhotos={tour.images} effectImage={effectImage} />
      </div>
    </>
  );
};

export default TourPageHero;
