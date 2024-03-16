/* 
Hoisting is a fundamental concept in JavaScript that can sometimes be confusing, but understanding it is crucial for writing clean and predictable code. Here's a breakdown of what you need to know:

What is hoisting?

In simple terms, hoisting is the phenomenon where declarations of variables and functions seem to be "moved" to the top of their enclosing scope before the code is actually executed. This means you can use a function or access a variable even before their definitions are encountered in the code.

What gets hoisted?

Function declarations: Function declarations are fully hoisted, meaning both the declaration and the function body are available throughout the scope where they are declared.
Variable declarations: Only the declarations of variables with var keyword are hoisted. This means the variable names are accessible throughout the scope, but trying to use them before their assignment will result in undefined. In strict mode, using undeclared variables throws a ReferenceError.
let and const declarations: These are not hoisted at all. You cannot access them before their declaration in the code.

**/

/***************Function Hoisting********************* */
console.log('Function hoisting');

// Function declaration is hoisted to the top
function greet() {
  console.log("Hello!");
}

greet(); // This will print "Hello!" even though the function comes after

// Function expression is not hoisted
const sayHi = function() {
  console.log("Hi!");
};

// sayHi(); // This will throw an error because sayHi is not defined yet

greet(); // Still works because greet is hoisted


/**************Variable Hoisting with var************ */

// Variable declaration with var is hoisted but initialized to undefined
var message;
console.log(message); // Prints "undefined"

message = "Welcome";
console.log(message); // Prints "Welcome"

// Accessing before declaration gives you undefined
function printName() {
  console.log(name); // Prints "undefined"
  var name = "Bard";
}

printName();

/******************************************************* */
// `let` and `const` declarations are not hoisted
console.log(name); // Throws ReferenceError because name is not declared

let name = "Bard";

// Assignment still happens at the original location
const pi = 3.14;
pi = 3.15; // This will throw a TypeError because const is immutable

// Using var instead would allow reassignment
var pi = 3.14;
PI = 3.15; // This works with var
