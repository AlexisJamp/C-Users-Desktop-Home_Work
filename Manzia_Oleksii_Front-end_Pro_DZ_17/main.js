// ДЗ 17


// 1. Вычисление среднего арифметического чисел из массива

/* function Avarage(){
    let myArr = prompt('Enter your array: ').split('');
    let avarage = 0;
    counter = 0;
    for (let i = 0; i < myArr.length; i++){
        if (myArr[i] == Number(myArr[i])){
            avarage = avarage + Number(myArr[i]);
            counter++;
        } else {console.log('NaN')};
    }
    return avarage/counter;
}

console.log(Avarage()); */

// 2. Функция doMath +, -, *, /, %, ^ (ступінь ).
let x = prompt('Enter first number: ');
let y = prompt('Enter second number: ');
let znak = prompt('Enter a math symbol: ');

function doMath(x, y, znak){
    let result = 0;
    switch (znak){
        case '+':
            console.log( result = Number(x) + Number(y));
            break
        
    }
}

doMath()
// 3. 