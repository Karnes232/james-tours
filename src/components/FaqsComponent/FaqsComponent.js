import React from "react";
import TextComponent from "../TextComponent/TextComponent";
import Question from "./Question";

const FaqsComponent = ({ faqs }) => {
  console.log(faqs[0].node);
  return (
    <>
      <div className="mb-5 h-screen">
        <TextComponent
          title="Punta Cana FAQS"
          titleClassName="mt-5 mb-2 text-center font-lato text-3xl md:text-4xl lg:text-6xl"
        />
        {faqs.map((faq, index) => {
          console.log(faq.node);
          return (
            <Question
              key={index}
              question={faq.node.question}
              answer={faq.node.answer.answer}
            />
          );
        })}
      </div>
    </>
  );
};

export default FaqsComponent;
