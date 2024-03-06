// Дз 30

function showProducts(category) {
    const productsElement = document.getElementById('productList');
    productsElement.innerHTML = '';

    if (category === 'phones') {
        productsElement.innerHTML = '<ul><li><a href="#" onclick="showProductInfo(\'iPhone\')">iPhone</a></li><li><a href="#" onclick="showProductInfo(\'Samsung\')">Samsung</a></li></ul>';
    } else if (category === 'laptops') {
        productsElement.innerHTML = '<ul><li><a href="#" onclick="showProductInfo(\'MacBook\')">MacBook</a></li><li><a href="#" onclick="showProductInfo(\'Dell\')">Dell</a></li></ul>';
    }
}

function showProductInfo(productName) {
    const productInfoElement = document.getElementById('productInfo');

    productInfoElement.innerHTML = '<p>Название товара: ' + productName + '</p><button onclick="buyProduct(\'' + productName + '\')">Купити</button>';
}

function buyProduct(productName) {
    alert('Товар "' + productName + '" куплений!');
    const productInfoElement = document.getElementById('productInfo');
    productInfoElement.innerHTML = '';
}
