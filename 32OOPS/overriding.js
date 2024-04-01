class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log("Generic animal sound");
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    // Override the makeSound method in the Dog class
    makeSound() {
      console.log("Woof! Woof!");
    }
  }
  
  // Instances
  const genericAnimal = new Animal("Generic Animal");
  const myDog = new Dog("Buddy", "Labrador");
  
  genericAnimal.makeSound(); // Outputs: Generic animal sound
  myDog.makeSound();         // Outputs: Woof! Woof!
  