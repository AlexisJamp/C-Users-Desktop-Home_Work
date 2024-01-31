// ДЗ 18
let num = prompt('Enter number: ');
let degree = prompt('Enter degree: ');

function pow(num, degree){
    if (num == 1){
        return num;
    } else {
        return num ** degree
    }
}


console.log(pow(num, degree));