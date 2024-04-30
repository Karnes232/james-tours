import React from "react";
import PhotoAlbum from "react-photo-album";
import useWindowWidth from "../../customHooks/useWindowWidth";
const PhotoGrid = ({ tourPhotos }) => {
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
  const windowWidth = useWindowWidth();
  console.log(windowWidth);
  let targetRowHeight = 0;
  if (windowWidth < 450) {
    targetRowHeight = 350;
  } else {
    targetRowHeight = 300;
  }
  return (
    <div className="w-full">
      <PhotoAlbum
        layout="rows"
        targetRowHeight={targetRowHeight}
        photos={photoList.slice(0, 6)}
        containerWidth={1152}
        columns={3}
        padding={0}
        spacing={0}
      />
    </div>
  );
};

export default PhotoGrid;
