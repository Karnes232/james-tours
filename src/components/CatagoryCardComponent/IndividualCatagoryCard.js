import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const IndividualCatagoryCard = ({ category }) => {
  console.log(category.node.url);
  const image = getImage(category.node.categoryImage.gatsbyImage);
  return (
    <>
      {/* <Link to={featured ? `tours/${url}` : `${url}`}> */}
      <Link to={`/${category.node.url}`}>
        <div className="flex flex-col justify-center items-center max-w-[11rem] my-5 mx-2 rounded-lg overflow-hidden drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <GatsbyImage
            image={image}
            alt={category.node.categoryImage.title}
            className="h-64 max-w-[12rem] rounded-[150px]"
          />
          <div className="px-6 py-4 text-center max-w-[10rem] font-zeyada font-bold text-4xl leading-8">
            {category.node.category}
          </div>
        </div>
      </Link>
    </>
  );
};

export default IndividualCatagoryCard;
