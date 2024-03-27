/**************Prototypes*************** */
/**
In JavaScript, prototypes are a mechanism for implementing inheritance and sharing properties and methods between objects. 
Understanding prototypes is fundamental to understanding how inheritance works in JavaScript. 
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
  