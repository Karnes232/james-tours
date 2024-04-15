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

  //   const HeroStyles = {
  //     backgroundImage:
  //       "linear-gradient(45deg, rgba(245, 246, 252, 0.52), rgba(0, 0, 0, 0.53)), url(" +
  //       imageSrc[2]?.imageSrc +
  //       ")",
  //   };

  const imageEffect = getImage(effectImage);
  return (
    <>
      <div className="w-full h-[80vh] lg:h-[100vh] xl:h-screen">
        {/* <div
          className={`h-full bg-center bg-no-repeat bg-cover lg:bg-fixed`}
          style={HeroStyles}
        >
            
        </div> */}
        <BackgroundImage
          placeholder={imageSrc[0]?.imageSrc}
          src={imageSrc[3]?.imageSrc}
          className="myCustomClass relative"
        >
          <GatsbyImage
            image={imageEffect}
            alt=""
            className="z-50 absolute -bottom-[1px] w-screen"
          />
        </BackgroundImage>
      </div>
    </>
  );
};

export default HeroImageComponent;
