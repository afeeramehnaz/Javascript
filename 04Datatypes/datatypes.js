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

