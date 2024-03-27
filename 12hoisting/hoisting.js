/**************Hoisting************************ */
/*
What is hoisting?

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase, 
before the code is executed. This means that regardless of where variables and functions are declared within their scope, 
they are treated as if they are declared at the top of that scope.
What gets hoisted?

Function declarations: Function declarations are fully hoisted, meaning both the declaration and the function body are available throughout the scope where they are declared.
Variable declarations: Only the declarations of variables with var keyword are hoisted. This means the variable names are accessible throughout the scope, but trying to use them before their assignment will result in undefined. 
In strict mode, using undeclared variables throws a ReferenceError.
let and const declarations: These are not hoisted at all. You cannot access them before their declaration in the code.

**/

/***********Function Hoisting ********************** */

sayHello(); // Output: Hello

function sayHello() {
    console.log("Hello");
}


/***************Function Expressions ********************* */
//Hoisting works differently for function expressions:


sayHi(); // TypeError: sayHi is not a function

var sayHi = function() {
    console.log("Hi");
};


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
pi = 3.14;
const pi = 3.15; // This will throw a TypeError because const is immutable


