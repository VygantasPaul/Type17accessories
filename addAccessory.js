const messageWrapper = document.getElementById("response-message");

const clearMessage = () => {
  messageWrapper.innerHTML = "";
};
const displayMessage = (message, isSuccess) => {
  messageWrapper.innerHTML = message;
  messageWrapper.style.color = isSuccess ? "green" : "red";
};

const getAccesoriesObject = () => {
  accessorySizeArray = [];
  
  const accessoryTitle = document.getElementById('accessory-title').value;
  const accessoryDescription = document.getElementById('accessory-description').value;
  const accessoryBrand = document.getElementById('accessory-brand').value;
  const accessoryImage = document.getElementById('accessory-image').value;
  const accessorySizes = document.querySelectorAll('input[name="size"]:checked');
  
  if (accessorySizes.length > 0) {
    accessorySizes.forEach(element => {
      const checkbox = element.value;
      accessorySizeArray.push(checkbox);
    });
  }
  const accessory ={
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
  return false
} 

}

const onAccesoryInserted = (accesories) => {
  if(accesories) {
    displayMessage("Accessory was inserted successfuly", true);
    setTimeout(()=>{
      window.location.replace("./index.html");
    },3000)
  } else {
    displayMessage("Accessory insert was with link error", false);
  }
}

const validateForm = (accessory) => {
  const { title, brand, description, size } = accessory;
  if (title.trim() === '' || brand.trim() === '' || description.trim() === '' || size.length === 0) {
    displayMessage("Please fill in all required fields", false);
    return false;
  }
  console.log(accessory)
  return true; 
}

document.querySelector('form').addEventListener('submit', async(e)=>{
  e.preventDefault();
  const accessory = getAccesoriesObject();
  if(!validateForm(accessory)){
    return
  }
  const accesories = await insertAccesory (accessory)
  onAccesoryInserted(accesories)

})

