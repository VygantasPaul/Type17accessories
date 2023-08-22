// const toAdddisplayAccesories = (accesories) => {

// }

document.querySelector('form').addEventListener('submit', async(e)=>{
  e.preventDefault();
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
  
  if(accessoryTitle == '' && accessoryBrand == '' && accessoryDescription == ''){
    alert('Please check fields')
  }else {
    const messageWrapper = document.getElementById("response-message");
    messageWrapper.innerHTML = "Recipe was inserted"
    setTimeout(()=>{
      window.location.replace("./index.html");
    },5000)
  }
  const accessoryAdd = {
    title:accessoryTitle,
    brand:accessoryBrand,
    description:accessoryDescription,
    image:accessoryImage,
    size:accessorySizeArray
  }
  try {
    let response = await fetch ('https://64e3116cbac46e480e781e99.mockapi.io/accesories',{
    method:'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    
    body: JSON.stringify(accessoryAdd)
  });
  if(response.ok){
    let accesories = await response.json();
  }
}catch(error){
  console.log(error);
  const messageWrapper = document.getElementById("response-message");
  messageWrapper.innerHTML = "Recipe was not inserted"
  
} 

})