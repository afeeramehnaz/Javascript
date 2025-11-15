/*The behavior of the this keyword in JavaScript can differ between the browser environment and Node.js due to differences in how functions are invoked and the context in which they run.

1.Browser Environment:
In the browser, the value of this typically depends on how a function is invoked.
In methods, such as event handlers or object methods, this usually refers to the object that the method belongs to (the object to the left of the dot when the method is called).
When a function is called standalone (not as a method of an object), this usually refers to the global object (window in browsers) in non-strict mode. In strict mode, this is undefined in such cases.
Arrow functions (=>) do not have their own this context; they inherit the this value from the surrounding lexical context.
*/

const obj = {
    name: 'John',
    greet() {
        console.log(`Hello, ${this.name}`);
    }
};

obj.greet(); // Output: Hello, John

const greetFunction = obj.greet;
greetFunction(); // Output: Hello, undefined (or throws an error in strict mode)
