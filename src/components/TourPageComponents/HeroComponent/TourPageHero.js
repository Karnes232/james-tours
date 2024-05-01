import React from "react";
import PhotoGrid from "./PhotoGrid";
import HeroImageComponent from "../../HeroImageComponent/HeroImageComponent";

const TourPageHero = ({ tour, effectImage }) => {
  console.log(tour.name);
  return (
    <>
      <div className="lg:hidden">
        <HeroImageComponent
          image={tour.mainImage.gatsbyImage}
          title={tour.name}
          effectImage={effectImage}
          dark={true}
          short
        />
      </div>
      <div className="hidden lg:block">
        <PhotoGrid
          tourPhotos={tour.images}
          effectImage={effectImage}
          title={tour.name}
        />
      </div>
    </>
  );
};

export default TourPageHero;
