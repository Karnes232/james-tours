import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import BackgroundImage from "react-background-image";

const SecondaryHero = ({ backgroundImage, effectImage, imageClassName }) => {
  let heroImage =
    backgroundImage?.gatsbyImage?.images?.fallback?.srcSet.split(",");
  const imageSrc = [];
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
          placeholder={backgroundImage.gatsbyImage.placeholder.fallback}
          src={imageSrc[2]?.imageSrc}
          className={`myCustomClass ${imageClassName}`}
        >
          <GatsbyImage
            image={imageEffect}
            alt=""
            className="z-50 !absolute -top-[2px] rotate-180 w-screen"
          />

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

export default SecondaryHero;
