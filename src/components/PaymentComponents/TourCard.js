import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const TourCard = ({ tour, guestCount, date }) => {
  const image = getImage(tour?.mainImage?.gatsbyImage);
  const price = tour?.cost + tour?.depositPrice;

  const newDate = new Date(date + "\n").toDateString();

  return (
    <>
      {tour && (
        <div className="w-80 xl:w-[25rem] flex flex-col my-5">
          <div className="flex flex-col justify-between mb-5 mt-2">
            <div className="flex w-full justify-between">
              <GatsbyImage
                image={image}
                alt={tour?.name}
                className="rounded-md w-32 h-32 md:w-32 md:h-32 object-cover"
                loading="lazy"
              />
              <div className="flex flex-col justify-center px-5 w-2/3">
                <div className="flex justify-center items-center">
                  <h1 className="text-lg font-bold truncate lg:whitespace-normal">
                    {tour?.name}
                  </h1>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-normal">Price p/p:</p>
                  <p className="font-normal">${price.toFixed(2)}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-normal">Guest Count:</p>
                  <p className="font-normal">{guestCount}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-normal">{newDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TourCard;
