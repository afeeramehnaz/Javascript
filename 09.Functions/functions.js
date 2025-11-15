/****************Functions************** */

/**
 * 
In JavaScript, functions are fundamental building blocks of code that allow you to encapsulate a block of code and execute it at a later time or multiple times. 
Functions in JavaScript are first-class citizens, meaning they can be treated like any other data type, such as strings or numbers
 */


/**
 * 1.Function Declaration: 
 * You can declare a function using the function keyword followed by the function name and a pair of parentheses (). 
 * Inside the parentheses, you can specify parameters that the function accepts. Here's an example:
 */

 function greet(name) {
    console.log("Hello, " + name + "!");
}
/**
 * 2.Function Expression: You can also create a function using a 
 * function expression, where you assign an anonymous function to a variable. Here's an example:
 */

 const greet = function(name) {
    console.log("Hello, " + name + "!");
};
/**
 * 3.Arrow Functions: Introduced in ES6, 
 * arrow functions provide a more concise syntax for writing functions, especially for short anonymous functions. 
 */

 const greet = (name) => {
    console.log("Hello, " + name + "!");
};
/**
 * 4.Anonymous Functions: Functions without a name are called anonymous functions.
 *  They are often used as callback functions or function expressions
 * 
 */

 setTimeout(function() {
    console.log("This is an anonymous function.");
}, 1000);


greet("John");
