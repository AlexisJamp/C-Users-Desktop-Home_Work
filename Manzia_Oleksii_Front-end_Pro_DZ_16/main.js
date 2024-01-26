// ДЗ 16

function generateKey() {
    let len = prompt('Enter a number of caracters: ');
    let caracters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    
    let counter = 0;
    let text = '';
    
    for (let i = 1; i <= len; i++){
        counter = Math.floor(Math.random() * len);
        text += caracters[counter];
        console.log(counter)
    }
    return text;
}  
console.log(generateKey());
