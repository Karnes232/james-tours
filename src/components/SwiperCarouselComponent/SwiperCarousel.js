import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const SwiperCarousel = ({ photoList, effectImage }) => {
  let photoListEdited = [];

  photoList?.forEach((e) => {
    let image = {
      title: e.title,
      image: getImage(e.gatsbyImage),
    };
    photoListEdited.push(image);
  });
  const imageEffect = getImage(effectImage);
  return (
    <>
      <Swiper
        effect={"fade"}
        loop={true}
        //   autoplay={{
        //     delay: 3000,
        //     disableOnInteraction: false,
        //   }}

        modules={[Autoplay, EffectFade]}
        className={`mySwiper my-3 h-[30rem] md:h-[40rem] lg:h-[50rem] xl:h-[60rem] w-full mx-0 relative`}
      >
        <GatsbyImage
          image={imageEffect}
          alt=""
          className="z-50 !absolute -top-[1px] rotate-180 w-screen"
        />
        {photoListEdited.map((image, index) => {
          return (
            <SwiperSlide className="relative" key={index}>
              <GatsbyImage
                image={image.image}
                alt={image.title}
                className="h-full object-cover w-full brightness-90"
                // width={screenWidth > 600 ? 1920 : 640}
                // height={screenWidth > 600 ? 1280 : 427}
              />
            </SwiperSlide>
          );
        })}
        <GatsbyImage
          image={imageEffect}
          alt=""
          className="z-50 !absolute -bottom-[1px] w-screen"
        />
      </Swiper>
    </>
  );
};

export default SwiperCarousel;
