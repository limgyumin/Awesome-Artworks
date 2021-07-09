import media from "./media";

const colors = {
  bgWhite: "#fff",

  ftBlack: "#000",
  ftGray: "#31343A",
  ftBlue: "#005DFF",
  ftSkyBlue: "#F6F7F9",
};

export const theme = {
  colors,
  media,
};

export type Theme = typeof theme;
