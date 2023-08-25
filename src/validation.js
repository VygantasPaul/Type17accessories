export const validateForm = (accessory,displayMessage) => {
  const { title, brand, description, image } = accessory;
  const urlRegex =
  /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;
  
  if (title.trim() === '' || brand.trim() === '' || description.trim() === '') {
    displayMessage("Please fill in all required fields", false);
    return false;
  } 
  if ((image.trim() === '')){
    displayMessage("Image empty but its good..", true);
    return true;
  } 
  
  if (!urlRegex.test(image)){
    displayMessage("Image format is wrong..", false);
    return false;
  } 
 
  
}