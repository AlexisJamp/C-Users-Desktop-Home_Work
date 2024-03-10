// Дз 32

function generateList(array) {
    let result = '<ul>';

    array.forEach(item => {
        if (Array.isArray(item)) {
            result += '<li>' + generateList(item) + '</li>';
        } else {
            result += '<li>' + item + '</li>';
        }
    });

    result += '</ul>';
    return result;
}

const array = [1, 2, [3, 4, 5], 6];
const list = generateList(array);
console.log(list);
