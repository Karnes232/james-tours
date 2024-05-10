import React from "react";
import SwiperCarousel from "../../SwiperCarouselComponent/SwiperCarousel";
import PhotoGrid from "./PhotoGrid";

const TourSwiperCarousel = ({ images, effectImage }) => {
  return (
    <>
      <div className="lg:hidden">
        <SwiperCarousel photoList={images} effectImage={effectImage} />
      </div>
      <div className="hidden lg:block">
        <PhotoGrid tourPhotos={images} effectImage={effectImage} />
      </div>
    </>
  );
};

export default TourSwiperCarousel;
