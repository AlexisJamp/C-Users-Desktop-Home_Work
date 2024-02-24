// Дз 24

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  static SMALL = {price: 50, calories: 20};
  static LARGE = {price: 100, calories: 40};
  static CHEESE = {price: 10, calories: 20};
  static SALAD = {price: 20, calories: 5};
  static POTATO = {price: 15, calories: 10};
  static MAYO = {price: 20, calories: 5};
  static SPICE = {price: 15, calories: 0};

  addTopping(topping) {
    this.toppings.push(topping)
  }
  calculatePrice() {
    const basePrice = this.size.price + this.stuffing.price;
    const toppingsPrice = this.toppings.reduce((total, topping) => total + topping.price, 0);
    return basePrice + toppingsPrice;
  }

  calculateCalories() {
    const baseCalories = this.size.calories + this.stuffing.calories;
    const toppingsCalories = this.toppings.reduce((total, topping) => total + topping.calories, 0);
    return baseCalories + toppingsCalories;
  }
}


const hamburger = new Hamburger(Hamburger.SMALL, Hamburger.CHEESE);
hamburger.addTopping(Hamburger.MAYO);

console.log("Calories - " + hamburger.calculateCalories());
console.log("Price - " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.SPICE);

console.log("Price with sauce - " + hamburger.calculatePrice());
