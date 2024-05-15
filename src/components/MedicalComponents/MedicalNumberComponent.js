import React from "react";
import TextComponent from "../TextComponent/TextComponent";
import { list } from "postcss";

const MedicalNumberComponent = ({ title, numbers }) => {
  let listedNumbers = [];
  numbers.split(/\r?\n/).forEach((number) => {
    let split = number.split(" ");
    let hello = split[0].replace("-", " ");
    split[0] = hello;
    listedNumbers.push(split);
  });

  console.log(listedNumbers);
  return (
    <>
      <div className="my-10 xl:my-15 mx-5">
        <TextComponent
          title={title}
          titleClassName="my-5 2xl:mb-10 text-4xl md:text-6xl lg:text-8xl font-zeyada text-primary-color"
        />
      </div>
    </>
  );
};

export default MedicalNumberComponent;
