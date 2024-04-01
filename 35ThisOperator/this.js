/************This **********************/

//The this keyword in JavaScript refers to the object on which a method is being called or to the context in which a function is executed.
// The value of this is determined by how a function is called.

//1.Global context: In the global scope or outside of any function, this refers to the global object 
console.log(this === window); // Output: true (in browsers)

//2.Function context: When a function is called as a method of an object, this refers to the object that owns the method.

const obj = {
    name: 'Alice',
    greet: function() {
      console.log('Hello, ' + this.name);
    }
  };
  
  obj.greet(); // Output: Hello, Alice

//3.Constructor context: When a function is used as a constructor with the new keyword, this refers to the newly created object.

function Person(name) {
    this.name = name;
  }
  
  const person = new Person('Bob');
  console.log(person.name); // Output: Bob

  
//4.Explicit binding: You can explicitly specify the value of this using methods like call(), apply(), or bind().

function greet() {
    console.log('Hello, ' + this.name);
  }
  
  const obj1 = { name: 'Alice' };
  const obj2 = { name: 'Bob' };
  
  greet.call(obj1); // Output: Hello, Alice
  greet.apply(obj2); // Output: Hello, Bob
  
  const greetBob = greet.bind(obj2);
  greetBob(); // Output: Hello, Bob

//5.Arrow functions: Arrow functions do not have their own this context; instead, they inherit the this value from the enclosing lexical context.



const object = {
    name: 'Alice',
    greet: function() {
      setTimeout(() => {
        console.log('Hello, ' + this.name);
      }, 1000);
    }
  };
  
  object.greet(); // Output: Hello, Alice (after 1 second)
  