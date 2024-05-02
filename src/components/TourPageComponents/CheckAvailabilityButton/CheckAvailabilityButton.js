import React from "react";

const CheckAvailabilityButton = () => {
  return (
    <nav className="bg-white px-4 border-t-2 border-primary-color mt-0 fixed w-full z-[100] bottom-0 md:hidden">
      <button className="flex items-center justify-center no-underline md:text-2xl w-full font-medium bg-primary-color text-secondary-color px-4 py-2 md:py-3 my-2 rounded-full hover:opacity-70">
        Check Availability
      </button>
    </nav>
  );
};

export default CheckAvailabilityButton;
