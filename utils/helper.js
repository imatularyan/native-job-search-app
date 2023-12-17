export const checkImgURL = (url) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jpg|jpej|bmp|gif|webp)$",
      "i"
    );
    return pattern.test(url);
  }
};
