import React from "react";
import { motion } from "framer-motion";
const TextComponent = ({
  title,
  paragraph,
  titleClassName,
  paragraphClassName,
}) => {
  console.log(title);
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 3,
          delay: 0.3,
        }}
        className="flex flex-col items-center justify-center text-center max-w-5xl mx-5 lg:p-2 xl:mx-auto"
      >
        <h1
          className={`font-lato tracking-wider font-semibold  ${titleClassName}`}
        >
          {title}
        </h1>
        <p
          className={`font-montserrat lg:text-lg text-gray-700 lg:mt-5 ${paragraphClassName}`}
          dangerouslySetInnerHTML={{ __html: paragraph }}
        ></p>
      </motion.div>
    </div>
  );
};

export default TextComponent;
