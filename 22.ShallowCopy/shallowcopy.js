/*****************Shallow Copy************************ */

/**
 * 
 *Shallow Copy:
A shallow copy creates a new object and inserts references to the original object's elements into it.
It means that the new object points to the same memory locations as the original object for its elements.
If the elements of the original object are mutable (like lists or dictionaries), changes made to these elements via the shallow copy will affect the original object.
However, if the elements are immutable (like integers or strings), changes made via shallow copy won't affect the original object.
Shallow copies are generally created using the constructor method of the object or by using the copy() method.
 */

var originalArray = [1, 2, 3, { nested: 'object' }];

// Shallow copy using slice
var shallowCopyArray = originalArray.slice();

// Modify the originalArray
originalArray[3].nested = 'updated';

console.log(originalArray);
// Output: [1, 2, 3, { nested: 'updated' }]

console.log(shallowCopyArray);
// Output: [1, 2, 3, { nested: 'updated' }]

//Using the spread (...) operator:

/************************************************** */

var originalObject = { name: 'John', age: 25, details: { city: 'New York' } };

// Shallow copy using spread operator
var shallowCopyObject = { ...originalObject };

// Modify the originalObject
originalObject.details.city = 'San Francisco';

console.log(originalObject);
// Output: { name: 'John', age: 25, details: { city: 'San Francisco' } }

console.log(shallowCopyObject);
// Output: { name: 'John', age: 25, details: { city: 'San Francisco' } }

/**************************************** */

// Shallow copy of an array
const originalArray = [1, 2, { a: 3 }];
const shallowCopyArray = [...originalArray];

shallowCopyArray[2].a = 5;
console.log(originalArray); // Output: [1, 2, { a: 5 }] - Changes reflect in the original array
/***************************************** */

// Shallow copy of an object
const originalObject = { a: 1, b: { c: 2 }};
const shallowCopyObject = Object.assign({}, originalObject);

shallowCopyObject.b.c = 5;
console.log(originalObject); // Output: { a: 1, b: { c: 5 }} - Changes reflect in the original object

