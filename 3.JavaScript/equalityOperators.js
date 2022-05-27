
// Equality Operators.

// In JS there are 2 equality operators --> "==", "=== [Strict Equality Operators]".

// == [Checks for equality of values.]
// === [Checks for equality of values and equality of dataTypes.]

let x = null;  // empty.
let y;  // empty.

console.log(x==y);  // true because both x and y are same value.
console.log(x===y); // false because object!=undefiend.

let num1 = 10;
let num2 = "10";

console.log(num1==num2);  // true because 10 and "10" both values are same.
console.log(num1===num2); // false because number is not equal to string.