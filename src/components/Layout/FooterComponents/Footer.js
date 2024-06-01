import React from "react";
import SocialMedia from "./SocialMedia";
import Sitemap from "./Sitemap";
import Copyright from "./Copyright";
import BackgroundImage from "react-background-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Footer = ({ layoutData, effectImage }) => {
  let heroImage =
    layoutData?.footerBackground?.gatsbyImage?.images?.fallback?.srcSet.split(
      ",",
    );
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
      <footer className="lg:h-[30rem] w-screen">
        <BackgroundImage
          placeholder={imageSrc[0]?.imageSrc}
          src={imageSrc[3]?.imageSrc}
          className="footerBackground"
        >
          <GatsbyImage
            image={imageEffect}
            alt=""
            className="z-50 !absolute -top-[1px] rotate-180 w-screen"
            loading="lazy"
          />
          <div className="mx-5 mt-5 pt-5 md:pt-14 lg:pt-20 xl:pt-36 2xl:pt-40 flex max-w-6xl flex-col h-[30rem] justify-center xl:mx-auto !z-50 relative">
            <SocialMedia layoutData={layoutData} classes={"text-white"} />
            <Sitemap />
            <div className="flex flex-col justify-between md:flex-row">
              <Copyright tourCompany={layoutData.tourCompanyName} />
            </div>
          </div>{" "}
        </BackgroundImage>
      </footer>
    </>
  );
};

export default Footer;
