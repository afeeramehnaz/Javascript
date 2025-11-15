let str1 = "Hello";
let str2 = "world";
let greeting = str1 + ", " + str2 + "!"; // Concatenation

let message = "This is a message.";
let length = message.length; // String Length

let text = "Hello";
let firstChar = text[0]; // Accessing Characters
let thirdChar = text.charAt(2);

let str = "JavaScript";
let substr = str.substring(0, 4); // Substring

let sentence = "The quick brown fox jumps over the lazy dog";
let word = "fox";
let position = sentence.indexOf(word); // Finding Substrings

let sentenceSplit = "This is a sentence.";
let words = sentenceSplit.split(" ");
let joined = words.join("-"); // Splitting and Joining

let caseChange = "Hello World";
let upperCase = caseChange.toUpperCase(); // String Case
let lowerCase = caseChange.toLowerCase();

let replaceString = "I like cats!";
let newString = replaceString.replace("cats", "dogs"); // Replace

var fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
// Extract elements from index 1 to index 3 (not including 3)
var slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits);
// Output: ['banana', 'orange']
// Original array remains unchanged
console.log(fruits);
// Output: ['apple', 'banana', 'orange', 'grape', 'kiwi']
var fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// Remove 2 elements starting from index 1
var removedElements = fruits.splice(1, 2);

console.log(removedElements);
// Output: ['banana', 'orange']

// Original array is modified
console.log(fruits);
// Output: ['apple', 'grape', 'kiwi']

var fruits = ['apple', 'grape', 'kiwi'];

// Insert 'orange' and 'banana' starting from index 1
fruits.splice(1, 0, 'orange', 'banana');

console.log(fruits);
// Output: ['apple', 'orange', 'banana', 'grape', 'kiwi']


console.log("Concatenation:", greeting);
console.log("String Length:", length);
console.log("Accessing Characters:", firstChar, thirdChar);
console.log("Substring:", substr);
console.log("Finding Substrings:", position);
console.log("Splitting and Joining:", joined);
console.log("String Case:", upperCase, lowerCase);
console.log("Replace:", newString);

// Concatenation: Hello, world!
// String Length: 18
// Accessing Characters: H l
// Substring: Java
// Finding Substrings: 16
// Splitting and Joining: This-is-a-sentence.
// String Case: HELLO WORLD hello world
// Replace: I like dogs!