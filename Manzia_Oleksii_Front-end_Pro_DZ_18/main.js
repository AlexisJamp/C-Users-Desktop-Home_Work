// ДЗ 18
let num = prompt('Enter number: ');
let degree = prompt('Enter degree: ');

function pow(num, degree){
    if (degree === 0){
        return 1;
    }
    return num * pow(num, degree-1)
    
}

console.log(pow(num, degree));

