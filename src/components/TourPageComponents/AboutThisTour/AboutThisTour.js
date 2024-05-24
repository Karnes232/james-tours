import React from "react";
import TextComponent from "../../TextComponent/TextComponent";
import ListGroup from "./ListGroup";

const AboutThisTour = ({
  cost,
  depositPrice,
  duration,
  included,
  whatToBring,
  importantInfomation,
}) => {
  let price = cost + depositPrice;
  return (
    <>
      <TextComponent
        title="About this Tour"
        titleClassName="mt-5 2xl:mt-10 text-3xl md:text-4xl lg:text-6xl font-zeyada text-primary-color"
      />

      <div className="max-w-5xl my-2">
        <div className="flex flex-col lg:flex-row w-full justify-between space-y-3">
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-xs lg:text-base">From</div>
            <div className="text-xs lg:text-base flex items-center">
              <span className="font-semibold text-lg lg:text-2xl mr-2">
                ${price.toFixed(2)}
              </span>{" "}
              per person
            </div>
          </div>
          <div className="font-montserrat text-gray-700 lg:text-xl">
            <span className="font-semibold">Duration:</span> {duration}
          </div>
        </div>
        <ListGroup
          included={included}
          whatToBring={whatToBring}
          importantInfomation={importantInfomation}
        />
      </div>
    </>
  );
};

export default AboutThisTour;
