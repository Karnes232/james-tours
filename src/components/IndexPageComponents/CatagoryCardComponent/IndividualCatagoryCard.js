import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { motion } from "framer-motion";
const IndividualCatagoryCard = ({ category, link, index }) => {
  const image = getImage(category.node.categoryImage.gatsbyImage);

  return (
    <>
      {/* <Link to={featured ? `tours/${url}` : `${url}`}> */}
      <Link to={`${link}`} state={{ tourGroup: category.node.category }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            delay: index / 2 + 0.3,
          }}
          className="flex flex-col justify-center items-center max-w-[11rem] my-5 mx-2 rounded-lg  drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] "
        >
          <GatsbyImage
            image={image}
            alt={category.node.categoryImage.title}
            className="h-64 max-w-[12rem] rounded-[150px] hover:scale-110 ease-in-out duration-300"
          />
          <div className="px-6 py-4 text-center max-w-[10rem] font-zeyada font-bold text-4xl leading-8">
            {category.node.category}
          </div>
        </motion.div>
      </Link>
    </>
  );
};

export default IndividualCatagoryCard;
