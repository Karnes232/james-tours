import React from "react";
import IndividualCatagoryCard from "./IndividualCatagoryCard";
import CtaButton from "../CtaButton/CtaButton";

const CatagoryCardComponent = ({ categories, link }) => {
  return (
    <>
      <div className="py-10" id="catagories">
        <div className="flex justify-center flex-row flex-wrap md:justify-evenly max-w-5xl xl:max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <IndividualCatagoryCard
              category={category}
              link={link}
              key={index}
              featured
            />
          ))}
        </div>
        <CtaButton text="View Tours" link={link} />
      </div>
    </>
  );
};

export default CatagoryCardComponent;
