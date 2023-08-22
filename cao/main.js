
const wrapper = document.querySelector('#cars')

const toShowData = (cars) => {
  console.log(cars)
  const tbody = document.querySelector('tbody');
  
  
  cars.forEach(e => {
    const tr_value = document.createElement('tr');
    const carModel = document.createElement('td')
    carModel.innerHTML = e.model;
    
    const carBrand = document.createElement('td')
    carBrand.innerHTML = e.brand;
    
    tr_value.append(carBrand,carModel)
    tbody.append(tr_value);
  });
  
}
const createTableHead = () => {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const theadTr = document.createElement('tr');
  
  const car = document.createElement('th');
  car.textContent = 'Car'
  
  const model = document.createElement('th');
  model.textContent = 'Model' 
  theadTr.append(car,model)
  
  thead.append(theadTr)
  table.append(thead)
  table.append(tbody)
  
  wrapper.append(table)
}

createTableHead();


const displayData =  async() => {
  let response = await fetch ('https://olive-bead-glazer.glitch.me');
  try{
    if(response.ok) {
      let cars = await response.json();
      toShowData(cars)
    }
  }catch(error){
    console.log(error)
  }
  
}

displayData();




