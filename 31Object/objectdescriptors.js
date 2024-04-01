/**
 * Object descriptors, also known as property descriptors, are a set of attributes that define the behavior of a property in JavaScript objects. 
 * They provide metadata about a property, including its value, writability, configurability, and enumerability. 
 * Object descriptors are used to define how properties behave when they are accessed, modified, or enumerated
 */

 /*In JavaScript, each property of an object has an associated property descriptor. The property descriptor is an object that contains the following attributes:

 1.value: The value associated with the property.
 2.writable: A boolean indicating whether the property's value can be changed. Defaults to false.
 3.enumerable: A boolean indicating whether the property can be enumerated using a for...in loop or Object.keys() method. Defaults to false.
 4.configurable: A boolean indicating whether the property's attributes can be changed or the property can be deleted. Defaults to false.

 */


 const obj = {
    name: 'John',
    age: 30
  };
  
  // Get the property descriptor of 'name'
  const nameDescriptor = Object.getOwnPropertyDescriptor(obj, 'name');
  console.log(nameDescriptor);
  // Output:
  // {
  //   value: 'John',
  //   writable: true,
  //   enumerable: true,
  //   configurable: true
  // }
  
  // Change the property descriptor of 'age'
  Object.defineProperty(obj, 'age', {
    writable: false
  });
  
  // Attempt to change the value of 'age'
  obj.age = 35; // Error in strict mode or silently ignored in non-strict mode
  
  // Attempt to delete 'age'
  delete obj.age; // Error in strict mode or silently ignored in non-strict mode
  