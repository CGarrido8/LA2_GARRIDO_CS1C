// Declaring variables and a constant then storing data
let a = 25;
let b = 20;
let c = 12;
let d = "15"; 
const e = 15;

// Display the sum of the declared variables a,b,c,d and the constant e
let d_int = parseInt(d); // Convert d from string to an integer
let sumResult = a + b + c + d_int + e;
console.log("Sum of variables a, b, c, d, and constant e:", sumResult);

// Compare the values of variable d and constant e using relational operators
d_int = parseInt(d); // Convert d to an integer for comparison

console.log("d > e:", d_int > e);
console.log("d < e:", d_int < e);
console.log("d >= e:", d_int >= e);
console.log("d <= e:", d_int <= e);
console.log("d === e:", d_int === e);

// Declare new variables to store the results of the following operations
// 1. Subtract all the values of the declared variables.
let subtractResult = a - b - c - d_int - e;
console.log("Subtraction result (a - b - c - d - e):", subtractResult);

// 2. Multiply the values of variable a and c, divided by constant e.
let multiplyDivideResult = (a * c) / e;
console.log("Multiplication and division result (a * c) / e:", multiplyDivideResult);

// 3. Display the exponent value of constant e raised to the power of variable c.
let exponentResult = Math.pow(e, c);
console.log("Exponent result (e ^ c):", exponentResult);

// 4. Reassign the value of c to 3, and then reassign it to constant e and display the result.
c = 3;
console.log("New value of constant e (after reassigning c to 3):", e);
