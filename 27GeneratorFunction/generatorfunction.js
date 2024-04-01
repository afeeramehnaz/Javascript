/********************Generator Function********************************** */
/*
A generator function in JavaScript is a special type of function that allows you to control the iteration process explicitly. 
It generates a sequence of values on-the-fly using the yield keyword. 
Generator functions are defined using the function* syntax, and they return a special type of iterator known as a generator.
*/

/*****Syntax********* */
function* myGenerator() {
    yield value1;
    yield value2;
    // More yield statements
}


function* myGenerator() {
    yield 'hello';
    yield 'world';
    yield '!';
}

let gen = myGenerator();

console.log(gen.next().value); // Output: hello
console.log(gen.next().value); // Output: world
console.log(gen.next().value); // Output: !
console.log(gen.next().value); // Output: undefined (generator is exhausted)


/**
 * Use Cases:
Lazy Evaluation:

Generator functions enable lazy evaluation, allowing you to generate values on-the-fly without computing all values upfront.
Asynchronous Programming:

Generator functions are often used with asynchronous code to simplify asynchronous control flow using features like async/await.
Infinite Sequences:

Generator functions can generate infinite sequences of values, which are consumed as needed.
Iterating Over Large Data:

When dealing with large datasets, generator functions can be more memory-efficient than loading the entire dataset into memory.
 */