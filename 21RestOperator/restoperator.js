/**
 * 
 * The rest operator (...) in JavaScript is used to represent an indefinite number of arguments as an array.
 * It allows you to gather the remaining parameters of a function into a single array variable. 
 * The rest operator is often used in function declarations and destructuring assignments.
 * 
 * 
 */

/***********1. Rest Parameter in Function Declarations************************* */
 function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15
  
/***********2. Rest Parameter with Regular Parameters:************************************ */
  function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
  }
  
  console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]
  
/************3. Destructuring with Rest:************** */
const [first, ...rest1] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(rest1);  // Output: [2, 3, 4, 5]

/************4. Using Rest with Objects:*********************** */
const { a, b, ...rest2 } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a);    // Output: 1
console.log(b);    // Output: 2
console.log(rest2); // Output: { c: 3, d: 4 }

/**************5.Arrow functions********************** */

const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
