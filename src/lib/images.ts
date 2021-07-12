import { GiphyImage } from "types/giphy.type";

export const distinct = (images: GiphyImage[]) => {
  return images.filter(
    (item, index) =>
      images.findIndex((compare) => item.id === compare.id) === index
  );
};

export const merge = (images: GiphyImage[], other: GiphyImage[]) => {
  const mergedArray = [...images, ...other];

  return distinct(mergedArray);
};
