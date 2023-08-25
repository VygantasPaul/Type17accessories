export const createSizeList = (sizes) => {
  const sizeList = document.createElement('ul');
  
  if (sizes.length > 0) {
    const label = document.createElement('span');
    label.innerHTML = `<strong> Sizes: </strong> `;
    sizeList.appendChild(label);
    
    sizes.forEach(e => {
      const sizeLi = document.createElement('li');
      sizeLi.textContent = e;
      sizeList.appendChild(sizeLi);
    });
  } else {
    sizeList.innerHTML = ' ';
  }
  
  return sizeList;
};