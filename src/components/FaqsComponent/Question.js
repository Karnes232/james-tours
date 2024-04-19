import React, { useState } from "react";
import { BiSolidRightArrow, BiSolidUpArrow } from "react-icons/bi";
const Question = ({ question, answer }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="mt-2 block border-b border-gray-200 max-w-[90vw] lg:max-w-3xl mx-auto">
      <div
        className="p-2 text-md w-full flex items-center"
        onClick={(e) => setReadMore(!readMore)}
      >
        <div>
          <div className="pr-4 text-sm text-primary-color">
            {" "}
            {readMore ? <BiSolidUpArrow /> : <BiSolidRightArrow />}
          </div>
        </div>
        <div className="tracking-tight text-base md:text-xl font-medium">
          {question}
        </div>
      </div>
      {readMore ? (
        <div className="p-2 text-sm md:text-base mb-2 flex items-center leading-relaxed md:mx-[2rem]">
          {answer}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Question;
