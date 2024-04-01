
/*****************Memoization************************************** */
/*
Memoization is a programming technique used to optimize the performance of functions by caching the results of expensive function calls
and returning the cached result when the same inputs occur again. It's particularly useful for functions that are computationally expensive and 
frequently called with the same arguments.
*/


// Function to calculate the nth Fibonacci number without memoization
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Function to memoize the Fibonacci function
function memoizedFibonacci() {
    let cache = {}; // Cache to store computed results

    return function fib(n) {
        if (n in cache) {
            return cache[n]; // If result is already cached, return it
        }
        
        if (n <= 1) {
            return n;
        }
        
        // Calculate Fibonacci number and store it in cache
        cache[n] = fib(n - 1) + fib(n - 2);
        
        return cache[n];
    }
}

// Using the memoized Fibonacci function
const memoizedFib = memoizedFibonacci();

console.log(memoizedFib(5)); // Output: 5
console.log(memoizedFib(10)); // Output: 55
console.log(memoizedFib(20)); // Output: 6765
console.log(memoizedFib(30)); // Output: 832040
