// Дз 22

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Car {
  constructor(brand, model, year, registrationNumber) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.registrationNumber = registrationNumber;
    this.owner = null;
  }

  setOwner(owner) {
    if (owner.age >= 18) {
      this.owner = owner;
    } else {
      console.log("Owner mast be older than 18 y.o.!");
    }
  }

  displayCarInfo() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Building year: ${this.year}, Reg number: ${this.registrationNumber}`);
    if (this.owner) {
      console.log("Owner details:");
      this.owner.displayInfo();
    } else {
      console.log("This car dnt have an owner.");
    }
  }
}


const person1 = new Human("John", 25);
const person2 = new Human("Mary", 30);
const person3 = new Human("Paul", 17); 


const car1 = new Car("Toyota", "Camry", 2022, "BC1234AB");
const car2 = new Car("Honda", "Civic", 2019, "AC5678CD");


car1.setOwner(person1);
car2.setOwner(person3);


car1.displayCarInfo();
car2.displayCarInfo();