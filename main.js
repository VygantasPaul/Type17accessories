// fetch('https://64e3116cbac46e480e781e99.mockapi.io/accesories')
// .then(response=> response.json())
// .then(data => console.log(data))

const toShowData = (accesories) =>{
  const accesoriesWrap = document.querySelector('.accessories');
  
  accesories.forEach(item => {
    const unixTimestamp = item.createdAt; // Example Unix timestamp
    
    const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
    const formattedDate = date.toLocaleString(); // Convert to local date and time string
    
    let dateformat = formattedDate.split(',');
    console.log(item)
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class','item')
    
    const h2 = document.createElement('h2');
    h2.setAttribute('class','item-title');
    const h3 = document.createElement('h3');
    h3.setAttribute('class','item-subheading');
    const h4 = document.createElement('h4');
    h4.setAttribute('class','item-subheading');


    h2.innerHTML = `Title: ${item.title} `;
    h3.innerHTML = `Brand: ${item.brand} `;
    h4.innerHTML= `Published: <small>${dateformat[0]} </small>`;
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'item-sizes');
    
    if (item.size.length > 0) {
      
      const label = document.createElement('span');
      label.textContent = 'Sizes: ';
      ul.appendChild(label);
      
      item.size.forEach(size => {
        const li = document.createElement('li');
        li.textContent = size;
        ul.appendChild(li);
      });
      
    } else{
      ul.innerHTML = ''
    }
    
    const p = document.createElement('p');
    p.setAttribute('class','desc')
    p.innerHTML = item.description;
    const img = document.createElement('img');
    if (item.image !== ''){
      img.setAttribute('alt',item.title)
      img.setAttribute('src',item.image)
    } else {
      img.setAttribute('alt',item.title)
      img.setAttribute('src',"https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg")
    }
    // console.log(item)
    wrapper.append(h2,h3,h4,img,ul,p)
    
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

