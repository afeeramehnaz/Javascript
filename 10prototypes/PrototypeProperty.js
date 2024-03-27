/**
 * 2.Prototype Property:
 *  Each object in JavaScript has a special property called prototype. 
 * This property references another object known as the prototype object. 
 * When you create an object using object literals or the new keyword with a constructor function, 
 * the object's prototype is automatically set to the constructor function's prototype property.
 * */




// Constructor function for creating Person objects
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the prototype of Person
Person.prototype.introduce = function() {
    console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
};

// Creating instances of Person
var person1 = new Person("Alice", 30);
var person2 = new Person("Bob", 25);

// Calling the introduce method on instances
person1.introduce(); // Output: Hello, my name is Alice and I'm 30 years old.
person2.introduce(); // Output: Hello, my name is Bob and I'm 25 years old.
