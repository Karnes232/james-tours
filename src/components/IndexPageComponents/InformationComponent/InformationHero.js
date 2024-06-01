import React from "react";
import BackgroundImage from "react-background-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import InformationButton from "./InformationButton";
import { LiaPlaneArrivalSolid } from "react-icons/lia";
import { MdCurrencyExchange } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BsHospital } from "react-icons/bs";
const InformationHero = ({ backgroundImage, effectImage }) => {
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
          src={imageSrc[3]?.imageSrc}
          className="myCustomClass"
        >
          <GatsbyImage
            image={imageEffect}
            alt=""
            className="z-50 !absolute -top-[2px] rotate-180 w-screen"
            loading="lazy"
          />
          <div className="h-full flex items-center justify-center">
            <div className="flex flex-wrap justify-center lg:space-x-8 items-center h-3/4">
              <InformationButton
                Icon={<LiaPlaneArrivalSolid />}
                title="Airport"
                link="/information/airport"
              />
              <InformationButton
                Icon={<TiWeatherPartlySunny />}
                title="Weather"
                link="/information/weather"
              />
              <InformationButton
                Icon={<MdCurrencyExchange />}
                title="Currency"
                link="/information/currency"
              />
              <InformationButton
                Icon={<BsHospital />}
                title="Safety"
                link="/information/safety"
              />
            </div>
          </div>
          <GatsbyImage
            image={imageEffect}
            alt=""
            className="z-50 !absolute -bottom-[1px] w-screen"
            loading="lazy"
          />
        </BackgroundImage>
      </div>
    </>
  );
};

export default InformationHero;
