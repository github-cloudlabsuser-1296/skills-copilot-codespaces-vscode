class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

// Example usage:
const calculator = new Calculator();
console.log("Add: " + calculator.add(5, 3)); // Output: Add: 8
console.log("Subtract: " + calculator.subtract(5, 3)); // Output: Subtract: 2
console.log("Multiply: " + calculator.multiply(5, 3)); // Output: Multiply: 15
console.log("Divide: " + calculator.divide(5, 3)); // Output: Divide: 1.6666666666666667