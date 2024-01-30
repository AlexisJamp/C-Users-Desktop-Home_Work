// ДЗ 17


// 1. Вычисление среднего арифметического чисел из массива

function Avarage(){
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

console.log(Avarage());



// 2. Функция doMath.

let x = prompt('Enter first number: ');
let y = prompt('Enter second number: ');
let znak = prompt('Enter a math symbol: ');

function doMath(x, y, znak){
    let result = 0;
    switch (znak){
        case '+':
            return result = Number(x) + Number(y);
        case '-':
            return result = Number(x) - Number(y);
        case '*':
            return result = Number(x) * Number(y);
        case '/':
            return result = Number(x) / Number(y);
        case '%':
            return result = Number(x) % Number(y);
        case '**':
            return result = Number(x) ** Number(y);
    }
}

console.log(doMath(x,y,znak))


// 3. Заполнение массивов

let rows = prompt("Enter a number of strokes:");
let column = prompt("Enter a number of columns:");

function fillArray(rows, column) {
    let array = [];
    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < column; j++) {
            let enteredData = prompt(`Введите элемент для строки ${i + 1}, столбца ${j + 1}:`);
            array[i][j] = enteredData;
        }
    }
    return array;
}

console.log(fillArray(rows, column));


//4. Удаление ненуждных символов

let inputString = prompt('Enter a string: ');
let toRemove = prompt('Enter a caracters to remove throu coma').split(', ');

function removeCharactersFromString(inputString, toRemove) {
    let charSet = new Set(toRemove);

    let resultArray = inputString.split('').filter(char => !charSet.has(char));

    return resultArray.join('');
}

let result = removeCharactersFromString(inputString, toRemove);

console.log(result);

