// Дз 27

let img = document.getElementsByClassName('text');


const imageNames = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
const randomIndex = Math.floor(Math.random() * imageNames.length);
const randomImageSrc = imageNames[randomIndex];


img = randomImageSrc;