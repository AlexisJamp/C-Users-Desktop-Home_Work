// Дз 25

class SuperMath {
  check(obj) {
    const { X, Y, znak } = obj;
    const confirmMessage = `Do you like make ${znak} with ${X} and ${Y}? (yes/no)`;
    const answer = prompt(confirmMessage);

    if (answer.toLowerCase() === "yes") {
      const result = this.calculate(X, Y, znak);
      console.log(`Result: ${result}`);
    } else if (answer.toLowerCase() === "no") {
      this.input();
    } else {
      console.log("Incorrect answer. Enter 'yes' or 'no'.");
    }
  }

  input() {
    const X = prompt("Enter first number:");
    const Y = prompt("Enter second number:");
    const znak = prompt("Enter math operator (+ - / * %):");
    
    this.check({ X: parseFloat(X), Y: parseFloat(Y), znak });
  }

  isValidOperation(znak) {
    const validOperations = ["+", "-", "/", "*", "%"];
    return validOperations.includes(znak);
  }

  calculate(X, Y, znak) {
    switch (znak) {
      case "+":
        return X + Y;
      case "-":
        return X - Y;
      case "/":
        return X / Y;
      case "*":
        return X * Y;
      case "%":
        return X % Y;
      default:
        return null;
    }
  }
}

const superMath = new SuperMath();
const obj = { X: 12, Y: 3, znak: "/" };
superMath.check(obj);