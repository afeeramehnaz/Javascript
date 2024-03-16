/**
 * 
Functionality:

Invokes a function: Just like calling a function directly, call() executes the provided function's code.
Sets this context: The first argument to call() becomes the new this value within the function. This allows you to use the function with different objects as its context.
Passes arguments: Additional arguments provided after the context (this) are passed as regular arguments to the function.


Common use cases:

Changing this behavior: When a method is designed for a specific object, call() lets you use it with other objects. Imagine a greet() method for a Person object. You can use person1.greet.call(person2) to call greet() with person2 as its context.
Borrowing methods: You can "borrow" methods from one object and use them on another. For example, array1.sort.call(array2) sorts array2 using the sorting logic from array1.
Creating utility functions: By setting this to a specific value, you can create reusable functions that don't rely on a particular object's context.
 */


function person(name,age){
  this.name=name;
  this.age=age;
}

function greet(place){
    console.log(`Hello I'm ${this.name}  and my age is ${this.age} and I'm in ${place}`); 
}

const details=new person('afeera',26);
greet.call(details,'dhaka');