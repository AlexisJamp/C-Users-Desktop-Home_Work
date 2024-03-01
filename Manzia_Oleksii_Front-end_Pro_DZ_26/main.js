// Дз 26
let display = document.getElementsByClassName('display');

let hideBlock = function(event){
  if(event.type === 'mouseover'){
    event.target.style.display = 'none';
  } 
}
let showBlock = function(event){
  if (event.type === 'mouseout'){
    event.target.style.display = 'inline';
  }
}


Array.from(display).forEach(elem => {
  elem.addEventListener('mouseover', hideBlock);
  elem.addEventListener('mouseout', showBlock);
}
)