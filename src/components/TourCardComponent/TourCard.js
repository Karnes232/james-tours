import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const TourCard = ({ tour }) => {
  console.log(tour.node);
  const { name, price, mainImage, shortDescription, url, category } = tour.node;
  const image = getImage(mainImage?.gatsbyImage);
  return (
    <>
      <Link to={url}>
        <div className="max-w-sm min-w-[20rem] my-5 mx-2 rounded-lg overflow-hidden shadow-lg">
          <GatsbyImage
            image={image}
            alt=""
            className="w-full object-cover h-64 lg:h-60"
          />
          <div className="px-6 py-4">
            <div className="font-bold h-10 text-lg mb-2 flex justify-between">
              <div className="truncate mr-3">{name}</div>
              <div>${price}</div>
            </div>
            <p className="text-gray-700 h-32 text-sm text-wrap">
              {shortDescription.shortDescription}
            </p>
          </div>
          <div className="px-6 pt-4 h-24 pb-2 flex items-end flex-wrap">
            {category.map((category, index) => (
              <span
                className="flex justify-center items-center h-7 min-w-fit bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                key={index}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
};

export default TourCard;
