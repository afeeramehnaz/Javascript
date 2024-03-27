
/*1.Prototype Chain: 
Every JavaScript object has a prototype. When you try to access a property or method on an object, 
and if it's not found on that object, JavaScript looks for it in the object's prototype. 
This process continues up the prototype chain until the property or method is found or until it reaches the end of the chain.
**/

// Parent constructor function
function Animal(name) {
    this.name = name;
  }
  
  // Method defined on the prototype of Animal
  Animal.prototype.sayName = function() {
    console.log("I am " + this.name);
  }
  
  // Child constructor function
  function Dog(name, breed) {
    // Call parent constructor with 'this' context
    Animal.call(this, name);
    this.breed = breed;
  }
  
  // Set up inheritance: Dog prototype inherits from Animal prototype
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  // Method defined on the prototype of Dog
  Dog.prototype.bark = function() {
    console.log("Woof! I'm a " + this.breed);
  }
  
  // Create instances
  var animal = new Animal("Max");
  var dog = new Dog("Buddy", "Labrador");
  
  // Call methods
  animal.sayName(); // Output: I am Max
  dog.sayName();    // Output: I am Buddy
  dog.bark();       // Output: Woof! I'm a Labrador
  