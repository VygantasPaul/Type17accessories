import {messagesDisplay} from './src/messages.js';
import {formattedDateShow} from './src/formatDate.js';
import {setImageAttributes} from './src/imageAttr.js';
import {createSizeList} from './src/sizeList.js';
import {addHeader} from './src/header.js';
const BASE_URL = 'https://64e3116cbac46e480e781e99.mockapi.io/accesories/';
const url = new URL(window.location.href);
const accessoryId = url.searchParams.get("accessoryId");
const deleteButton = document.getElementById("item-delete-button");

const insertAccessoryToScreen = (accessory) => {
  const published = document.getElementById('item-published');
  const dateformat = formattedDateShow(accessory);
  published.innerHTML = `Published: <small>${dateformat} </small>`;
  
  const title = document.getElementById('item-title');
  title.innerHTML = accessory.title; 
  
  const brand = document.getElementById('item-brand');
  brand.innerHTML = accessory.brand;
  
  const description = document.getElementById('item-description');
  description.innerHTML = `<strong>Description:</strong>  ${accessory.description}`;
  
  const img = document.getElementById('item-poster-image');
  setImageAttributes(img, accessory.title, accessory.image); 

  const accessorySizes = document.getElementById('item-sizes');
  const sizeList = createSizeList(accessory.size);

  accessorySizes.innerHTML = ''; 
  accessorySizes.appendChild(sizeList);
  
  console.log(accessory)
}

const getAccessory =  async() => {
  let response = await fetch (BASE_URL + accessoryId);
  
  try{
    if(response.ok) {
      let accessory = await response.json();
      return accessory
    }
  }catch(error){
    console.log(error)
  }
  
}

const deleteAccessory = async () => {
  try{
    const response = await fetch (BASE_URL + accessoryId, {
      method:"DELETE"
    });
    
    const data = await response.json();
    return data;
    
  }catch(error){
    console.log(error)
    return false;
    
  }
}
const onDeleteAccessory = (data) => {
  if(data) {
    messagesDisplay("Accessory was deleted", true)
    setTimeout(() => {
      window.location.replace("./index.html");
    }, 1000);
  } else {
    messagesDisplay("Accessory was not deleted", true)
  }
}
const onClickDeleteButton = async() => {
  try {
    const response = await deleteAccessory();
    onDeleteAccessory(response)
  }catch (error) {
    console.log(error)
  }
}

deleteButton.addEventListener("click",  onClickDeleteButton);

const displayAccessory = async() => {
  const accessory =  await getAccessory()
  accessory && insertAccessoryToScreen(accessory)
}

displayAccessory()

const app = document.querySelector('#wrap');
addHeader(app)

