

const addcar = () => {
  let brandInput = document.querySelector('#brand').value;
  let modelInput = document.querySelector('#model').value;
  if(brandInput == '' && modelInput == '') {
    alert ('Iveskite laukelius')
  }else {
    alert ('Iveskite laukelius')
  }
  const carAdd = {
    brand: brandInput,
    model: modelInput
  }
  fetch ('https://olive-bead-glazer.glitch.me', {
  method:'POST',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(carAdd)
})
.then((response)=>{
  return response.json();
})
.then((data)=>{
  console.log(data)
}).catch(error => { error })

}
document.querySelector('button').addEventListener('click',(e)=>{
  e.preventDefault();
  addcar();
})


