/*
*
In JavaScript, the prototype is a mechanism that allows you to share properties and 
methods among objects. Every JavaScript object has a prototype, and when you access a property or method on an object, 
if it's not found directly on the object, JavaScript looks for it in the object's prototype chain.

*/


// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Adding a method to the prototype
  Person.prototype.greet = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  };
  
  // Creating objects using the constructor function
  const person1 = new Person('Alice', 30);
  const person2 = new Person('Bob', 25);
  
  console.log(person1.greet()); // Output: Hello, my name is Alice and I am 30 years old.
  console.log(person2.greet()); // Output: Hello, my name is Bob and I am 25 years old.
  