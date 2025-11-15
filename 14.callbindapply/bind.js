/**************bind************* */

/**
 * 
 * In JavaScript, the bind method is used to create a new function that, 
 * when called, has its this keyword set to a specific value. 
 * It's particularly useful when you want to ensure that a function is called
 *  with a specified context, regardless of how it's invoked.
 */

const person = {
  name: 'John',
  sayHello: function (age) {
    console.log(`Hello, my name is ${this.name} and my age is ${age}`);
  }
};

// Create a bound function with 'person' as the 'this' value
const boundSayHello = person.sayHello.bind(person,45);

// Now, 'boundSayHello' can be called independently of 'person'
boundSayHello(); // Outputs: Hello, my name is John

// Even if called in a different context, 'this' is still bound to 'person'
const anotherObject = { name: 'Alice' };
boundSayHello.call(anotherObject); // Outputs: Hello, my name is John
