/**
Higher-order functions are functions that can accept other functions as arguments and/or return functions as their results. In JavaScript, functions are first-class citizens, meaning they can be treated like any other value, such as numbers, strings, or objects. This allows for the creation of higher-order functions, which are powerful tools for building flexible and modular code.

Here's a basic explanation of higher-order functions:

Accepting Functions as Arguments:

1.Higher-order functions can take other functions as arguments. These functions are often referred to as callback functions. Callback functions are passed as arguments to the higher-order function and are called or executed inside the body of the higher-order function.
Returning Functions as Results:

2.Higher-order functions can also return functions as their results. This allows for the creation of functions on-the-fly based on certain conditions or parameters.
 */


// Example 1: Passing a function as an argument
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(); // Execute the callback function
}

// Callback function
function sayGoodbye() {
  console.log("Goodbye!");
}

// Calling the higher-order function with a callback
greet("Alice", sayGoodbye); 

/************************************************************************************* */
  
// Example 2: Returning a function from another function
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
console.log(double); // Output: [Function: createMultiplier]
console.log(double(5)); // Output: 10


/****************************************************************************** */
// Example 3: Using array higher-order functions
const numbers = [1, 2, 3, 4, 5];

// map: applies a function to each element of an array and returns a new array
const doubledNumbers = numbers.map(function (num) {
  return num * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// filter: creates a new array with elements that satisfy a condition
const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]

// reduce: applies a function to accumulate the elements of an array into a single value
const sum = numbers.reduce(function (accumulator, current) {
  return accumulator + current;
}, 0);

console.log(sum); // Output: 15
