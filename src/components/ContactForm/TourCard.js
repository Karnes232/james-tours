import React, { useState } from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import DatePicker from "./DatePicker";
const TourCard = ({ tour }) => {
  const [guestAmount, setGuestAmount] = useState(1);
  const image = getImage(tour?.mainImage?.gatsbyImage);
  console.log(tour);
  return (
    <>
      <input type="hidden" name="tourName" value={tour?.name} />
      <input type="hidden" name="guestCount" value={guestAmount} />
      <input
        type="hidden"
        name="totalCost"
        value={`$${tour.price * guestAmount}`}
      />
      {tour && (
        <div className="w-80 xl:w-[25rem] flex flex-col my-5 xl:mt-24">
          <div className="flex flex-col justify-between mb-5 mt-2">
            <div className="flex w-full justify-around mb-1">
              <h1 className="text-lg font-bold truncate lg:whitespace-normal">
                {tour?.name}
              </h1>

              <p className="text-gray-600 text-end flex items-center justify-end">
                ${tour?.price}
              </p>
            </div>
            <div className="flex w-full justify-between">
              <GatsbyImage
                image={image}
                alt={tour?.name}
                className="rounded-md w-32 h-32 md:w-32 md:h-32 object-cover"
              />
              <div className="flex flex-col justify-between w-2/3">
                <div className="flex gap-4 justify-center items-center">
                  <button
                    className="px-4 py-2 bg-secondary-color text-primary-color text-xs font-bold uppercase rounded hover:opacity-70 focus:outline-none focus:bg-gray-700"
                    onClick={(e) => {
                      e.preventDefault();
                      setGuestAmount(guestAmount + 1);
                    }}
                  >
                    +
                  </button>
                  <p>{guestAmount}</p>

                  <button
                    className="px-4 py-2 bg-secondary-color text-primary-color text-xs font-bold uppercase rounded hover:opacity-70 focus:outline-none focus:bg-gray-700"
                    onClick={(e) => {
                      e.preventDefault();
                      setGuestAmount(guestAmount - 1);
                    }}
                  >
                    -
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  Total Cost: ${tour.price * guestAmount}
                </div>
                <DatePicker />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TourCard;
