// Дз 35

function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;
    const languages = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        languages.push(checkbox.value);
    });

    const table = `
        <table>
            <tr><th>Name:</th><td>${firstName}</td></tr>
            <tr><th>Last name:</th><td>${lastName}</td></tr>
            <tr><th>Date of birth:</th><td>${dob}</td></tr>
            <tr><th>Sex:</th><td>${gender}</td></tr>
            <tr><th>City:</th><td>${city}</td></tr>
            <tr><th>Adress:</th><td>${address}</td></tr>
            <tr><th>Languages:</th><td>${languages.join(', ')}</td></tr>
        </table>
    `;
    document.getElementById('registrationForm').innerHTML = table;
}
