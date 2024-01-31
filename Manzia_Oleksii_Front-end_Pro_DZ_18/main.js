// ДЗ 18
let num = prompt('Enter number: ');
let degree = prompt('Enter degree: ');

function degreeFunction(num){
    return function(degree){
        return num ** degree;
    }
}

const increase = degreeFunction(degree);

console.log(increase(num));