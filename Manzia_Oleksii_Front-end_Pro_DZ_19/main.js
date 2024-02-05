// ДЗ 19

function myFunc(number){

    function inside(lastNumber){
        number = number + lastNumber;
        return number
    }
    return inside;
}

let someFunc = myFunc(3);
let result = someFunc(0);

console.log(result)
console.log(someFunc(5))
console.log(someFunc(20))