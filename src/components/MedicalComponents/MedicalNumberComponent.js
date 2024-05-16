import React from "react";
import TextComponent from "../TextComponent/TextComponent";

const MedicalNumberComponent = ({ title, numbers }) => {
  let listedNumbers = [];
  numbers.split(/\r?\n/).forEach((number) => {
    let split = number.split(" ");
    let replaced = split[0].replaceAll("-", " ");
    split[0] = replaced;
    let obj = {
      name: split[0],
      number: split[1],
    };
    listedNumbers.push(obj);
  });

  return (
    <>
      <div className="my-10 xl:my-15 mx-5">
        <TextComponent
          title={title}
          titleClassName="my-5 2xl:mb-10 text-4xl md:text-6xl lg:text-8xl font-zeyada text-primary-color lg:text-center"
        />
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly 2xl:space-x-10 mx-auto lg:mt-10">
          <div className="max-w-sm min-w-[22rem] md:min-w-[30rem] my-5 mx-2 rounded-lg overflow-hidden shadow-lg flex flex-col bg-zinc-50 bg-opacity-60">
            <div className="">
              {listedNumbers.map((emergencyContact, index) => {
                return (
                  <div
                    className="flex justify-between py-5 border-b text px-5"
                    key={index}
                  >
                    <div>{emergencyContact.name}</div>
                    <div> {emergencyContact.number}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalNumberComponent;
