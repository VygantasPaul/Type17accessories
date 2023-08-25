import {formattedDateShow} from './src/formatDate.js';
import {setImageAttributes} from './src/imageAttr.js';

const toShowData = (accesories) =>{
  const accesoriesWrap = document.querySelector('.accessories');
  
  accesories.sort((a, b) => a.title.localeCompare(b.title)).forEach(item => {

    const wrapper = document.createElement('a');
    wrapper.setAttribute('href','./accessory.html?accessoryId='+item.id)
    
    wrapper.setAttribute('class','item-wrapper') 
    
    const h2 = document.createElement('h2');
    h2.setAttribute('class','item-title');
    
    const h3 = document.createElement('h3');
    h3.setAttribute('class','item-subheading');
    
    const h4 = document.createElement('h4');
    h4.setAttribute('class','item-published');

    const dateformat = formattedDateShow(item);
    
    h2.innerHTML = `Title: ${item.title}`;
    h3.innerHTML = `Brand: ${item.brand}`;
    h4.innerHTML= `Published: <small>${dateformat} </small>`;
    
    const ul = document.createElement('ul');
    
    ul.setAttribute('class', 'item-sizes');
    
    console.log(item)
    
    const img = document.getElementById('item-poster-image');
    setImageAttributes(img, accessory.title, accessory.image); 

    wrapper.append(h2,h3,h4,img)
    accesoriesWrap.append(wrapper)
    
  });
}

const displayData =  async() => {
  let response = await fetch ('https://64e3116cbac46e480e781e99.mockapi.io/accesories');
  try{
    if(response.ok) {
      let accesories = await response.json();
      toShowData(accesories)
    }
  }catch(error){
    console.log(error)
  }
  
}

displayData();

