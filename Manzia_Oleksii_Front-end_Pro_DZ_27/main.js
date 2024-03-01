// Дз 27

const tbody = document.querySelector(".myTable");

for (let i = 0; i < 10; i++) {
    const row = document.createElement("tr");

  for (let j = 0; j < 10; j++) {
        const cellValue = i * 10 + j + 1;
        const cell = document.createElement("td");
        cell.textContent = cellValue;
        row.appendChild(cell);
  }

  tbody.appendChild(row);
}