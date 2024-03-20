// Дз 35

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
    productInfoElement.innerHTML = '<p>Name of product: ' + productName + '</p><button onclick="buyProduct(\'' + productName + '\')">Buy</button>';
}


function buyProduct() {
    document.getElementById('orderForm').style.display = 'block';
}


function validateOrder() {
    const fullName = document.getElementById('fullName').value;
    const city = document.getElementById('city').value;
    const deliveryAddress = document.getElementById('deliveryAddress').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const quantity = document.getElementById('quantity').value;

    if (fullName === '' || city === '' || deliveryAddress === '' || paymentMethod === '' || quantity === '') {
        alert('Please fill up all fields');
        return false;
    }

    displayOrderInfo(fullName, city, deliveryAddress, paymentMethod, quantity);

    document.getElementById('orderForm').style.display = 'none';

    document.getElementById('fullName').value = '';
    document.getElementById('city').value = '';
    document.getElementById('deliveryAddress').value = '';
    document.getElementById('paymentMethod').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('comment').value = '';
    return false;
}

function displayOrderInfo(fullName, city, deliveryAddress, paymentMethod, quantity) {
    const table = `
        <table>
            <tr><th>Full Name:</th><td>${fullName}</td></tr>
            <tr><th>City:</th><td>${city}</td></tr>
            <tr><th>Delivery Adress:</th><td>${deliveryAddress}</td></tr>
            <tr><th>Payment Method:</th><td>${paymentMethod}</td></tr>
            <tr><th>Quantity:</th><td>${quantity}</td></tr>
        </table>
    `;
    document.getElementById('productInfo').innerHTML = table;
    
}
