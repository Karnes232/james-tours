import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { motion } from "framer-motion";
const Step = ({ title, description, image }) => {
  const icon = getImage(image);
  return (
    <div className="flex flex-col items-center my-2 md:my-4 w-96 lg:min-h-72">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 3,
          delay: 0.3,
        }}
        className="flex flex-col items-center text-center max-w-5xl lg:p-2 xl:mx-auto"
      >
        <GatsbyImage
          image={icon}
          alt={title}
          className="w-20 md:w-24 h-20 md:h-24"
          loading="lazy"
        />
        <h1 className="font-lato tracking-wider font-semibold text-lg md:text-xl my-4 lg:h-14">
          {title}
        </h1>
        <p
          className="font-montserrat text-sm md:text-base text-gray-700 max-w-xs lg:max-w-[18rem]"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </motion.div>
    </div>
  );
};

export default Step;
