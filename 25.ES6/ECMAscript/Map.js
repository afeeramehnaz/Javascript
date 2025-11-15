/**
 * 
 * In JavaScript, Map and Set are built-in data structures introduced in ECMAScript 2015 (ES6) that provide efficient ways to store collections of data with certain characteristics.

Map:
A Map is a collection of key-value pairs where each key and value can be of any data type. The key in a Map can be any value (including objects or primitive values), and each key can only occur once. This means that a Map object can store any type of data as a key or value.

Key features of Map:
Key-Value Pairs: Each entry in a Map is a key-value pair.
Ordering: Maintains the insertion order of elements.
Iterability: Provides methods for iteration such as forEach, keys, values, and entries.
Size: Tracks the number of key-value pairs.
Flexible Key Types: Keys can be of any data type, including objects.
Efficient for Frequent Updates: Performs well in scenarios requiring frequent updates to the collection.
 */

let myMap = new Map();

myMap.set('name', 'John');
myMap.set(1, 'One');
myMap.set({}, 'Object');

console.log(myMap.get('name')); // Output: John
console.log(myMap.size); // Output: 3
