/**The spread operator (...) in JavaScript is a syntax that allows elements of an iterable
 *  (like an array or a string) to be expanded or spread into places where multiple elements or 
 * arguments are expected. It can be used in various contexts, 
 * providing a concise and clean way to work with arrays, objects, and function arguments. 
 * Here are some common use cases: */



/****** Combining arrays**************** */
arr1=[1,2,3];
arr2=[4,5,6];
combined_array=[...arr1,...arr2];

console.log(combined_array);// Output: [1, 2, 3, 4, 5, 6]

/****** Spread in Objects:*************** */
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Combining objects
const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Copying an object
const copyOfObject = { ...obj1 };
console.log(copyOfObject); // Output: { a: 1, b: 2 }

/********Spread in Function Arguments********** */

function sum(a, b, c) {
    return a + b + c;
  }
  
  const numbers = [1, 2, 3];
  console.log(sum(...numbers)); // Output: 6
  
/************rest operator****************** */
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(rest);  // Output: [2, 3, 4, 5]

/**************Shallow copies*************** */

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
