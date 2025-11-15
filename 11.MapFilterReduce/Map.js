/***
 * map, filter, and reduce are higher-order functions in JavaScript that are commonly used when working with arrays. 
 * They provide concise and expressive ways to transform, filter, and aggregate data in arrays.
 */
/*****************Map**************** */

/**
map: The map method creates a new array by applying a function to each element of an existing array.
 It takes a callback function as an argument, which is executed for each element in the array. 
 The callback function receives three arguments: the current element, the index of the current element, and the array being traversed. 
 The result of the callback function is used to populate the new array. The original array remains unchanged.

Example:
 */
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
// squaredNumbers: [1, 4, 9, 16, 25]

/**************************** */

const fruits = ['apple', 'banana', 'cherry'];
const capitalizedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(capitalizedFruits); // Output: ["APPLE", "BANANA", "CHERRY"]

/**************************** */

const persons = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
  ];
  
  const formattedPersons = persons.map(person => ({
    name: person.name.toUpperCase(),
    birthYear: new Date().getFullYear() - person.age
  }));
  
  console.log(formattedPersons);
  // Output: 
  // [
  //   { name: 'ALICE', birthYear: 1992 },
  //   { name: 'BOB', birthYear: 1997 },
  //   { name: 'CHARLIE', birthYear: 1987 }
  // ]
  