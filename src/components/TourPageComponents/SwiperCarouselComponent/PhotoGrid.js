import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import PhotoAlbum from "react-photo-album";
const PhotoGrid = ({ tourPhotos, effectImage }) => {
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
      <GatsbyImage
        image={imageEffect}
        alt=""
        className="z-50 !absolute -top-[2px] md:-top-[5px] lg:-top-[10px] w-screen rotate-180"
      />

      <GatsbyImage
        image={imageEffect}
        alt=""
        className="z-50 !absolute -bottom-[2px] md:-bottom-[5px] lg:-bottom-[10px] w-screen"
      />
    </div>
  );
};

export default PhotoGrid;
