/**
 * 
 * Constructor Functions: Constructor functions are functions used to create objects. 
 * When you create an object using a constructor function with the new keyword, 
 * the newly created object inherits properties and methods from the constructor function's prototype.
 */

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
};

var person1 = new Person("John", 30);
person1.sayHello(); // Output: Hello, my name is John and I'm 30 years old.
