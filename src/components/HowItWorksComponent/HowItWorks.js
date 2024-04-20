import React from "react";
import TextComponent from "../TextComponent/TextComponent";
import Step from "./Step";

const HowItWorks = ({ data }) => {
  console.log(data);
  return (
    <div className="mb-10">
      <TextComponent
        title={data.title}
        titleClassName="mt-5 mb-2 text-center font-zeyada text-3xl md:text-4xl lg:text-7xl text-primary-color"
        // pClassName="mb-4 2xl:mb-10"
      />
      <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center lg:max-w-6xl lg:mx-auto">
        <Step
          title={data.step1}
          description={data.description1.description1}
          image={data.image1.gatsbyImage}
        />
        <Step
          title={data.step2}
          description={data.description2.description2}
          image={data.image2.gatsbyImage}
        />
        <Step
          title={data.step3}
          description={data.description3.description3}
          image={data.image3.gatsbyImage}
        />
        <Step
          title={data.step4}
          description={data.description4.description4}
          image={data.image4.gatsbyImage}
        />
      </div>
    </div>
  );
};

export default HowItWorks;
