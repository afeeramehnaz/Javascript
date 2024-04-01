/**
Infinite currying is a concept in functional programming where a function can accept any number of arguments by repeatedly 
returning a new function until all arguments are provided, 
allowing for a flexible and concise way of function invocation.
 */

function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function (...moreArgs) {
                return curried(...args.concat(moreArgs));
            };
        }
    };
}

// Example usage
function sum(a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // Output: 6
console.log(curriedSum(1, 2)(3)); // Output: 6
console.log(curriedSum(1)(2, 3)); // Output: 6
console.log(curriedSum(1, 2, 3)); // Output: 6
