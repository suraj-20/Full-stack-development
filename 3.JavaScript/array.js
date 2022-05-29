
// Array => array is a collection of similiar type of data items.
// Array stores data based on indexes.
// Indexes starts at 0.

// 1. Creating the array 0  1   2   3   4   5
const arrayOfNumbers = [10, 20, 41, 21, 93, 54];

// 2. How to access the value from array.
console.log(arrayOfNumbers[2]);

// 3. How to add a new value in array.
arrayOfNumbers.push(50);
console.log(arrayOfNumbers);  // [10, 20, 41, 21, 93, 54, 50]

// 4. How to remove a value from array.
arrayOfNumbers.pop();
console.log(arrayOfNumbers);  // [10, 20, 41, 21, 93, 54]

// 5. How to insert an element anywhere using indexes.
arrayOfNumbers.splice(2, 0, 25);
console.log(arrayOfNumbers);  //[10, 20, 25, 41, 21, 93, 54]

// 6. How to delete an element using indexes.
arrayOfNumbers.splice(2, 1);
console.log(arrayOfNumbers);  //[10, 20, 41, 21, 93, 54]

// 7. How to get size of an array.
console.log(arrayOfNumbers.length);  // 6
