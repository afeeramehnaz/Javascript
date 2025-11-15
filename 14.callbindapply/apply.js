/**************apply************* */

/*In JavaScript, the apply() method is used to call a function with a given this value and arguments 
provided as an array (or an array-like object). */

//apply() is used to call the greet() function with the person object as this and the args array as arguments.

function greet(name, age) {
    console.log(`Hello, ${name}. You are ${age} years old.`);
  }
  
  // Using apply
  const person = { name: 'Alice', age: 30 };
  const args = ['Alice', 30];
  greet.apply(null, args); // Output: Hello, Alice. You are 30 years old.

  /********************************************* */
  

const numbers = [2, 4, 6, 8, 10];

const maxNumber = Math.max.apply(null, numbers);
console.log(maxNumber); // Output: 10


const minNumber = Math.min.apply(null, numbers);
console.log(minNumber);