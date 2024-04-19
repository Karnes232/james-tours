import React from "react";
import IndividualCatagoryCard from "./IndividualCatagoryCard";

const CatagoryCardComponent = ({ categories }) => {
  return (
    <>
      <div className="py-10" id="catagories">
        <div className="flex justify-center flex-row flex-wrap md:justify-evenly max-w-5xl xl:max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <IndividualCatagoryCard category={category} key={index} featured />
          ))}
        </div>
      </div>
    </>
  );
};

export default CatagoryCardComponent;
