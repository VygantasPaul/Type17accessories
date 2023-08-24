const BASE_URL = 'https://64e3116cbac46e480e781e99.mockapi.io/accesories/';

const messageWrapper = document.getElementById("response-message");

const clearMessage = () => {
  messageWrapper.innerHTML = "";
};
const displayMessage = (message, isSuccess) => {
  messageWrapper.innerHTML = message;
  messageWrapper.style.color = isSuccess ? "green" : "red";
};

const url = new URL(window.location.href);
const accessoryId = url.searchParams.get("accessoryId");

const deleteButton = document.getElementById("item-delete-button");

const formattedDateShow = (accessory) => {
  const unixTimestamp = accessory.createdAt; 
  const date = new Date(unixTimestamp * 1000); 
  const formattedDate = date.toLocaleString(); 
  const dateformat = formattedDate.split(',');
  return dateformat
}

const insertAccessoryToScreen = (accessory) => {
  const published = document.getElementById('item-published');
  const dateformat = formattedDateShow(accessory);
  published.innerHTML = `Published: <small>${dateformat[0]} </small>`;
  
  const title = document.getElementById('item-title');
  title.innerHTML = accessory.title; 
  
  const brand = document.getElementById('item-brand');
  brand.innerHTML = accessory.brand;
  
  const description = document.getElementById('item-description');
  description.innerHTML = `<strong>Description:</strong>  ${accessory.description}`;
  
  const img = document.getElementById('item-poster-image');
  img.setAttribute('src', accessory.image)
  
  if (accessory.image !== ''){
    img.setAttribute('alt',accessory.title)
    img.setAttribute('src',accessory.image)
  } else { 
    img.setAttribute('alt',accessory.title)
    img.setAttribute('src',"img/icon-image-not-found-free-vector.jpg")
  }
  const accessorySizes = document.getElementById('item-sizes');
  
  if (accessory.size.length > 0) {
    
    const label = document.createElement('span');
    label.innerHTML = `<strong> Sizes: </strong> `;
    accessorySizes.append(label)
    
    accessory.size.forEach(e => {
      const sizeLi = document.createElement('li');
      sizeLi.textContent = e;
      accessorySizes.append(sizeLi);
    });
    
  } else {
    accessorySizes.innerHTML = ' '
  }
  
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
    displayMessage("Accesory was deleted", true)
    setTimeout(() => {
      window.location.replace("./index.html");
    }, 1000);
  } else {
    displayMessage("Accesory was not deleted", true)
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