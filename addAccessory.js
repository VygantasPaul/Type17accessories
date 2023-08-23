const messageWrapper = document.getElementById("response-message");

const clearMessage = () => {
  messageWrapper.innerHTML = "";
};
const displayMessage = (message, isSuccess) => {
  messageWrapper.innerHTML = message;
  messageWrapper.style.color = isSuccess ? "green" : "red";
};

const toAdddisplayAccesories = () => {
  accessorySizeArray = [];

  const accessoryTitle = document.getElementById('accessory-title').value;
  const accessoryDescription = document.getElementById('accessory-description').value;
  const accessoryBrand = document.getElementById('accessory-brand').value;
  const accessoryImage = document.getElementById('accessory-image').value;
  const accessorySizes = document.querySelectorAll('input[name="size"]:checked');
  
  if(accessoryTitle === '' || accessoryBrand === '' || accessoryDescription === '' || accessorySizes.length === 0){
    displayMessage("Accessory was not inserted. Please fill in all required fields", false);

  }else {
    displayMessage("Accessory was inserted", true);
    setTimeout(()=>{
      window.location.replace("./index.html");
    },3000)
  }
  
  if (accessorySizes.length > 0) {
    accessorySizes.forEach(element => {
      const checkbox = element.value;
      accessorySizeArray.push(checkbox);
    });
  }
  return{
    title:accessoryTitle,
    brand:accessoryBrand,
    description:accessoryDescription,
    image:accessoryImage,
    size:accessorySizeArray
  }
}
document.querySelector('form').addEventListener('submit', async(e)=>{
  e.preventDefault();
  clearMessage();
  try {
    let response = await fetch ('https://64e3116cbac46e480e781e99.mockapi.io/accesories',{
    method:'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json", 
    },
    
    body: JSON.stringify(toAdddisplayAccesories())
  });
  if(response.ok){
    let accesories = await response.json();
    toAdddisplayAccesories(accesories)

  }
}catch(error){
  console.log(error);
  displayMessage("Accessory was not error", false);
} 

})