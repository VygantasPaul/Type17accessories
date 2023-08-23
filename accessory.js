const messageWrapper = document.getElementById("response-message");

const clearMessage = () => {
  messageWrapper.innerHTML = "";
};
const displayMessage = (message, isSuccess) => {
  messageWrapper.innerHTML = message;
  messageWrapper.style.color = isSuccess ? "green" : "red";
};

const accessoryId = localStorage.getItem("accessoryId");
const deleteButton = document.getElementById("item-delete-button");

const accessoryToScreen = (accessory) => {
  const published = document.getElementById('item-published');
  const unixTimestamp = accessory.createdAt; 
  const date = new Date(unixTimestamp * 1000); 
  const formattedDate = date.toLocaleString(); 
  
  let dateformat = formattedDate.split(',');
  
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
    label.textContent = 'Sizes: ';
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
  let response = await fetch ('https://64e3116cbac46e480e781e99.mockapi.io/accesories/' +accessoryId);
  
  try{
    if(response.ok) {
      let accessory = await response.json();
      accessoryToScreen(accessory)
    }
  }catch(error){
    console.log(error)
  }
  
}

getAccessory();

deleteButton.addEventListener("click", async () => {
  let response = await fetch ('https://64e3116cbac46e480e781e99.mockapi.io/accesories/' +accessoryId, {
  method:"DELETE"
});

try{
  let accessory = await response.json();
  if (accessory) {
    displayMessage('Accessory was deleted',true)
    setTimeout(() => {
      window.location.replace("./index.html");
    },1000);
  }
  
}catch(error){
  console.log(error)
  displayMessage('Accessory was added with error',false)
  
}

})
