import React from "react";

const TourInfo = ({ category }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between">
        <p className="font-extralight my-2 text-base md:text-lg tracking-wide flex items-end flex-wrap">
          {category.map((category, index) => (
            <span
              className="flex justify-center items-center h-7 min-w-fit bg-gray-200 rounded-full px-3 py-1 text-xs font-light text-gray-700 mr-2 mb-2"
              key={index}
            >
              {category}
            </span>
          ))}
        </p>
      </div>
    </>
  );
};

export default TourInfo;
