import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import useWindowWidth from "../../customHooks/useWindowWidth";
import BackgroundImage from "react-background-image";
const HeroImageComponent = ({ image }) => {
  console.log(image);
  let heroImage = image?.images?.fallback?.srcSet.split(",");
  const imageSrc = [];
  const windowWidth = useWindowWidth();
  heroImage?.forEach((element) => {
    const image = element.split(" ");
    const imageObject = { imageSrc: image[0], imageWidth: image[1] };
    imageSrc.push(imageObject);
  });

  const HeroStyles = {
    backgroundImage:
      "linear-gradient(45deg, rgba(245, 246, 252, 0.52), rgba(0, 0, 0, 0.53)), url(" +
      imageSrc[2]?.imageSrc +
      ")",
  };

  console.log(imageSrc[2]?.imageSrc);
  return (
    <>
      <div className="w-full h-[50vh] lg:h-[80vh] xl:h-screen">
        {/* <div
          className={`h-full bg-center bg-no-repeat bg-cover lg:bg-fixed`}
          style={HeroStyles}
        >
            
        </div> */}
        <BackgroundImage
          placeholder={imageSrc[0]?.imageSrc}
          src={imageSrc[2]?.imageSrc}
          className="bg-fixed"
        >
          Hello World
        </BackgroundImage>
      </div>
    </>
  );
};

export default HeroImageComponent;
