/*In JavaScript, there are several built-in data types:

/*************Primitive Data Types*************************

1.Number: Represents numeric values. It can be an integer or floating-point.
2.String: Represents textual data.
3.Boolean: Represents a logical value, true or false.
4.Undefined: Represents a variable that has been declared but not assigned a value.
5.Null: Represents the intentional absence of any object value.
6.Symbol (added in ECMAScript 6): Represents a unique identifier.


/*************************Composite Data Types**************

1.Object: Represents a collection of key-value pairs. Objects can be created with curly braces {} or with constructors.
2.Array: Represents a list-like collection of elements, which can be of mixed types. Arrays are created with square brackets [].
3.Function: Functions are first-class objects in JavaScript, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

/*************************Special Data Types****************

BigInt (added in ECMAScript 2020): Represents whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number primitive.
Date: Represents dates and times. Instances of Date object are created with the new Date() constructor.
RegExp (Regular Expression): Represents a pattern used in string matching.


*/
// Primitive type (string)
let primitiveStr = "Hello";
let anotherPrimitiveStr = primitiveStr;
anotherPrimitiveStr += " World";
console.log(primitiveStr); // Output: Hello (unchanged)
console.log(anotherPrimitiveStr); // Output: Hello World




// Non-primitive type (object)
let obj1 = { name: "Afeera" };
let obj2 = obj1;
obj2.name = "Mehnaz";
console.log(obj1.name); // Output: Mehnaz (changed)
console.log(obj2.name); // Output: Mehnaz

//objects
let person = {
    name: "Alice",
    age: 30
  };
console.log(person);
console.log(person.age);//30


//arrays
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[4]);//5

//Date
let currentDate = new Date();
console.log(currentDate)//Tue Jan 02 2024 18:52:04 GMT+0530 (India Standard Time)

//Regex
let pattern = /[a-zA-Z]+/;

//dictionary
const dict = {
    appreciate: "recognize the full worth of.",
    ataraxia: "a state of freedom from emotional disturbance and anxiety",
    yakka: "work, especially hard work."
  }
  
  console.log(dict['yakka'])//work, especially hard work.

