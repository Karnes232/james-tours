import { Link } from "gatsby";
import React from "react";

const CheckAvailabilityButton = ({ tour }) => {
  return (
    <nav className="bg-white px-4 border-t-2 border-primary-color mt-0 fixed w-full z-[100] bottom-0 md:hidden">
      <div className="flex justify-between">
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-xs">From</div>
          <div className="text-xs flex items-center">
            <span className="font-semibold text-lg mr-2">
              ${tour?.price?.toFixed(2)}
            </span>{" "}
            per person
          </div>
        </div>
        <div>
          <Link to={`/contact/reservationinquiry`} state={{ tour: tour }}>
            <button className="flex items-center justify-center no-underline md:text-2xl w-full font-medium bg-primary-color text-secondary-color px-4 py-2 md:py-3 my-2 rounded-full hover:opacity-70">
              Check Availability
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default CheckAvailabilityButton;
