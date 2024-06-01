import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const SecondaryImage = ({ image }) => {
  const secondaryImage = getImage(image.gatsbyImage);
  return (
    <>
      <GatsbyImage
        image={secondaryImage}
        alt={image.title}
        className="w-5/6"
        loading="lazy"
      />
    </>
  );
};

export default SecondaryImage;
