/*In JavaScript,
you can use three methods to control the mutability and extensibility of objects :
 Object.seal(),
Object.freeze(),
and Object.preventExtensions()*/
    

/*************Object.seal()************/
// This method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. However, the values of existing properties can still be changed if they are writable.

const obj = { name: 'Alice', age: 30 };
Object.seal(obj);

obj.name = 'Bob'; // Allowed
obj.city = 'New York'; // Not allowed (won't throw error in non-strict mode)
delete obj.age; // Not allowed (won't throw error in non-strict mode)

console.log(obj); // Output: { name: 'Bob', age: 30 }

/**********Object.freeze()*********** */
//This method freezes an object, preventing new properties from being added, existing properties from being removed, and all existing properties (including nested objects) from being changed. In other words, it makes the object read-only.

const obj = { name: 'Alice', age: 30 };
Object.freeze(obj);

obj.name = 'Bob'; // Not allowed
obj.city = 'New York'; // Not allowed (won't throw error in non-strict mode)
delete obj.age; // Not allowed (won't throw error in non-strict mode)

console.log(obj); // Output: { name: 'Alice', age: 30 }


/**********Object.preventExtensions()******* */
//This method prevents new properties from being added to an object, but existing properties can still be modified or deleted.

const obj = { name: 'Alice', age: 30 };
Object.preventExtensions(obj);

obj.name = 'Bob'; // Allowed
obj.city = 'New York'; // Not allowed (won't throw error in non-strict mode)
delete obj.age; // Allowed

console.log(obj); // Output: { name: 'Bob', age: 30 }
