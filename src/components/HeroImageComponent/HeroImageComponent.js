import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import BackgroundImage from "react-background-image";
const HeroImageComponent = ({ image, effectImage, title, dark }) => {
  let heroImage = image?.images?.fallback?.srcSet.split(",");
  const imageSrc = [];
  //   const windowWidth = useWindowWidth();
  heroImage?.forEach((element) => {
    const image = element.split(" ");
    const imageObject = { imageSrc: image[0], imageWidth: image[1] };
    imageSrc.push(imageObject);
  });

  const imageEffect = getImage(effectImage);
  return (
    <>
      <div className="w-full h-[40rem] lg:h-[50rem] xl:h-[60rem] relative">
        <BackgroundImage
          placeholder={imageSrc[0]?.imageSrc}
          src={imageSrc[3]?.imageSrc}
          className={`HeroImage ${dark ? "HeroImageDark" : ""}`}
        >
          <div className="flex justify-center text-center items-center h-full w-screen !z-50 relative -top-32">
            <div className="font-zeyada text-6xl md:text-7xl lg:text-8xl md:w-96 lg:w-[26rem] text-primary-color">
              {title}
            </div>
          </div>
          <GatsbyImage
            image={imageEffect}
            alt=""
            className="z-50 !absolute -bottom-[1px] w-screen"
          />
        </BackgroundImage>
      </div>
    </>
  );
};

export default HeroImageComponent;
