/****************Objects********************* */

//Object creation in JavaScript can be done in several ways, each with its own syntax and use cases. Here are some common methods for creating objects:

//1.Object literals: The simplest way to create an object is by using object literals, which allow you to define key-value pairs within curly braces {}.

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
//2.Using the Object constructor: You can create an empty object using the Object constructor and then add properties and methods to it.

const car = new Object();
car.make = 'Toyota';
car.model = 'Camry';
car.year = 2020;

//3.Using constructor functions: You can define a constructor function and then create multiple instances of objects using the new keyword.

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const person1 = new Person('Alice', 25);
  const person2 = new Person('Bob', 30);
//4.Using class syntax: ES6 introduced class syntax, which provides a more familiar and concise way to create objects and define their behavior.


class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  const dog = new Animal('Dog');
  dog.speak(); // Output: Dog makes a noise.

  //5.Using Object.create(): You can create a new object with a specified prototype object using the Object.create() method.

  const personPrototype = {
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  const personn = Object.create(personPrototype);
  personn.name = 'Alice';
  personn.greet(); // Output: Hello, my name is Alice
  