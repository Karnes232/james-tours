import React from "react";
import TextComponent from "../../TextComponent/TextComponent";
import ListGroup from "./ListGroup";

const AboutThisTour = ({
  duration,
  included,
  whatToBring,
  importantInfomation,
}) => {
  return (
    <>
      <TextComponent
        title="About this Tour"
        titleClassName="mt-5 2xl:mt-10 text-3xl md:text-4xl lg:text-6xl font-zeyada text-primary-color"
      />

      <div className="max-w-5xl my-2">
        <div className="font-montserrat text-gray-700 lg:text-xl">
          <span className="font-semibold">Duration:</span> {duration}
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
