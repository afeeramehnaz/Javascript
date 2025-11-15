/**
 * 
 Currying is a functional programming technique where a function with multiple arguments is converted into a sequence of nested functions,
  each taking a single argument. The curried function returns a new function after each argument,
  until all the arguments are provided and the original function is fully applied.
 */

// Original function with multiple arguments
function add(x, y, z) {
    return x + y + z;
}

// Curried version of the function
function curriedAdd(x) {
    return function(y) {
        return function(z) {
            return x + y + z;
        };
    };
}

// Usage of the curried function
const addTwoNumbers = curriedAdd(3);
const addThreeNumbers = addTwoNumbers(5);
console.log(addThreeNumbers(7)); // Output: 15 (3 + 5 + 7)
