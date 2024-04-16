import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import BackgroundImage from "react-background-image";
const HeroImageComponent = ({ image, effectImage }) => {
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
          className="myCustomClass"
        >
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
