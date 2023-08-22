
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
    h2.setAttribute('class','item-title')
    h2.innerHTML = item.title + ' - ' + item.brand + ' - <small>' +dateformat[0]+ '</small>';
    
    
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
      
    } 
    
    const p = document.createElement('p');
    p.setAttribute('class','desc')
    p.innerHTML = item.description;
    const img = document.createElement('img');
    if (img !== ''){
      img.setAttribute('alt',item.title)
      img.setAttribute('src',item.image)
    } else {
      img.setAttribute('alt',item.title)
      img.setAttribute('src',"https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg")
    }
    // console.log(item)
    wrapper.append(h2,img,ul,p)
    
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


// const addAccesories = () => {
//   const accessory = {
//     "createdAt": 1692607441,
//     "brand": "Reebok",
//     "title": "Reebok",
//     "description": "Reebok 2",
//     "image": "https://reebok.bynder.com/transform/391ec920-9a7a-43aa-b9f5-cb5aa9bcc323/100038884_SLC_eCom-tif?io=transform:scale,width:600",
//     "size": [
//       "34",
//       "43",
//       "44",
//       "46",
//       "47"    ],
//       "id": "10"
//     }
//     fetch ('https://64e3116cbac46e480e781e99.mockapi.io/accesories', {
//     method:'POST',
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//    body: JSON.stringify(accessory)
//   })
//   .then((response)=>{
//    return response.json();
//   })
//   .then((data)=>{
//     console.log(data)
//   })

// }

// addAccesories();