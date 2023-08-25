export const setImageAttributes = (img, title, imageUrl) => {
  img.setAttribute('alt', title);
  img.setAttribute('src', imageUrl || "img/icon-image-not-found-free-vector.jpg");
}; 