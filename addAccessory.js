import {validateForm} from './src/validation.js';
import {messagesDisplay} from './src/messages.js';
import {getSelectedCheckboxValues} from './src/checkBoxes.js';

const getAccesoriesObject = () => {
  const accessoryTitle = document.getElementById('accessory-title').value;
  const accessoryDescription = document.getElementById('accessory-description').value;
  const accessoryBrand = document.getElementById('accessory-brand').value;
  const accessoryImage = document.getElementById('accessory-image').value;
  const accessorySizeArray = getSelectedCheckboxValues('size');
  
  const accessory = {
    title:accessoryTitle,
    brand:accessoryBrand,
    description:accessoryDescription,
    image:accessoryImage,
    size:accessorySizeArray
  }
  return accessory;
}

const insertAccesory = async(accessory) => {
  
  try {
    let response = await fetch ('https://64e3116cbac46e480e781e99.mockapi.io/accesories',{
    method:'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(accessory)
  });
  
  const accesories = await response.json();
  return accesories;
  
} catch(error){

  return false;

} 

}

const onAccesoryInserted = (accesories) => {
  if(accesories) {
    messagesDisplay("Accessory was inserted successfuly", true);
    setTimeout(()=>{
      window.location.replace("./index.html");
    },5000)
  } else {
    messagesDisplay("Accessory insert was with link error", false);
  }
}

document.querySelector('form').addEventListener('submit', async(e)=>{
  e.preventDefault();
  
  const accessory = getAccesoriesObject();
  if(validateForm(accessory,messagesDisplay)){
    const accesories = await insertAccesory (accessory)
    onAccesoryInserted(accesories)
  } else {
    return false
  }
  
})

