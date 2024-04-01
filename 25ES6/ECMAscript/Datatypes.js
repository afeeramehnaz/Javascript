/*********ES6*********************
ES6, or ECMAScript 2015, introduced several enhancements to JavaScript, including new data types and modules.

Data Types:

ES6 introduced two new data types:

Symbol: Symbols are unique and immutable data types often used as object property keys to avoid name clashes. They're created using the Symbol() function.

BigInt: BigInt is a built-in object that provides a way to represent whole numbers larger than the largest number JavaScript can reliably represent with the Number primitive. 
BigInts are created by appending n to the end of an integer literal or by calling the BigInt() constructor.
*/

// Creating BigInt values
let bigInt1 = BigInt(9007199254740991); // A regular number
let bigInt2 = BigInt("90071992547409919223372036854775808"); // A string representing a large number

console.log(bigInt1); // Output: 9007199254740991n
console.log(bigInt2); // Output: 90071992547409919223372036854775808n

// Performing operations with BigInt values
let result = bigInt1 + bigInt2;
console.log(result); // Output: 90071992547409919223372036863763099n

/**************************************************************** */
//Symbol() is used to create unique symbols, which are immutable and unique identifiers.
//Symbols are often used as keys for properties in objects to avoid name clashes. 
//Each symbol value returned by Symbol() is unique, even if they have the same description.

// Creating symbols
const sym1 = Symbol();
const sym2 = Symbol("description");

console.log(typeof sym1); // Output: symbol
console.log(typeof sym2); // Output: symbol

// Symbols are unique
const sym3 = Symbol();
console.log(sym1 === sym3); // Output: false

// Symbols can be used as object properties
const obj = {
    [sym1]: "value"
};

console.log(obj[sym1]); // Output: value

// Symbol with description
console.log(sym2.toString()); // Output: Symbol(description)
