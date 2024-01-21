// Дз 12

// 1
let arr = [];

for (let i=0; i <= 30; i = i+0.5){
    arr.push(i)
}
console.log(arr.join(' '))

// 2 
let dollar = 27;
let currency = [];
for (let i = 10; i <= 100; i = i+10){
    currency.push(i*dollar)
}
console.log(currency.join('-'))

// 3
let num = prompt('Enter a number: ')
let squareList = [];
for (let i = 1; i <=100; i++){
    if (i**2 < num){
        squareList.push(i)
    }
}
console.log(squareList.join('-'));

// 4
let hallNumber = prompt('Enter a number: ')
let hallNumberList = [];
for (let i = hallNumber; i >= 0; i--){
    if (i >= 1 && hallNumber%i == 0){
        hallNumberList.push(i);
    }
}
if (hallNumberList.length <= 2){
    console.log('Это число простое.');
} else {
    console.log('Это число не простое');
}

// 5
let squareFm3 = prompt('Enter a number: ')
if (Math.sqrt(squareFm3) == 3){
    console.log('Это число степень числа.')
} else {
    console.log('Это число не является степенью числа 3.')
}