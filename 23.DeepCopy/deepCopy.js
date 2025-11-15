/**************************Deep Copy***********************************************
A deep copy, on the other hand, creates a new object and recursively inserts copies of the original object's elements into it.
It means that the new object has its own copies of the original object's elements, rather than just references to them.
Changes made to the elements of the deep copy won't affect the original object, regardless of whether the elements are mutable or immutable.
Deep copies are created using the deepcopy() function from the copy module.

*/

function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const originalObject = { a: 1, b: { c: 2 }};
const deepCopyObject = deepCopy(originalObject);

deepCopyObject.b.c = 5;
console.log(originalObject); // Output: { a: 1, b: { c: 2 }} - Changes don't reflect in the original object

/******************************* */
var originalObjects = { name: 'John', age: 25, details: { city: 'New York' } };

// Deep copy using JSON methods
var deepCopyObject = JSON.parse(JSON.stringify(originalObjects));

// Modify the originalObject
originalObjects.details.city = 'San Francisco';

console.log(originalObjects);
// Output: { name: 'John', age: 25, details: { city: 'San Francisco' } }

console.log(deepCopyObject);
// Output: { name: 'John', age: 25, details: { city: 'New York' } }


/***********deep copy without using JSON methods  **************/

function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj; // Return the value if obj is not an object
    }

    let copy;

    // Determine the type of obj
    if (Array.isArray(obj)) {
        copy = [];
        for (let i = 0; i < obj.length; i++) {
            copy[i] = deepCopy(obj[i]); // Recursive copy for array elements
        }
    } else {
        copy = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                copy[key] = deepCopy(obj[key]); // Recursive copy for object properties
            }
        }
    }

    return copy;
}
