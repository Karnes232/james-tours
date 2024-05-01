import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import PhotoAlbum from "react-photo-album";
import { motion } from "framer-motion";
const PhotoGrid = ({ tourPhotos, effectImage, title }) => {
  const imageEffect = getImage(effectImage);
  let photoList = [];
  tourPhotos.forEach((image, key) => {
    const photoObject = {
      src: image.url,
      width: image.gatsbyImage.width,
      height: image.gatsbyImage.height,
    };
    photoList.push(photoObject);
  });
  photoList = photoList.sort(() => Math.random() - 0.5);

  return (
    <div className="w-full relative">
      <PhotoAlbum
        layout="rows"
        targetRowHeight={(containerWidth) => {
          if (containerWidth < 400) return 75;
          if (containerWidth < 800) return 200;
          if (containerWidth < 1100) return 250;
          if (containerWidth < 1600) return 314;
          return 370;
        }}
        photos={photoList.slice(0, 6)}
        padding={0}
        spacing={0}
      />
      <div
        className={`flex justify-center text-center items-center top-0 h-full w-screen !z-50 absolute`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 3,
            delay: 0.3,
          }}
          className="font-zeyada text-6xl md:text-7xl lg:text-8xl xl:text-9xl md:w-96 lg:w-[26rem] xl:w-[30rem] text-primary-color"
        >
          {title}
        </motion.div>
      </div>
      <GatsbyImage
        image={imageEffect}
        alt=""
        className="z-50 !absolute -bottom-[2px] md:-bottom-[5px] lg:-bottom-[10px] w-screen"
      />
    </div>
  );
};

export default PhotoGrid;
