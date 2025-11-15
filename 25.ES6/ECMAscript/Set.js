/**
 * A Set is a collection of unique values where each value can occur only once. It can be used to store any type of data, and it ensures that there are no duplicate values in the collection.

Key features of Set:
Uniqueness: Ensures that each value occurs only once in the collection.
No Indexing: Values are stored in the order of insertion but cannot be accessed by index.
Iterability: Provides methods for iteration such as forEach, keys, values, and entries.
Size: Tracks the number of unique values.
Efficient for Checking Existence: Performs well in scenarios requiring quick existence checks.
 */

let mySet = new Set();

mySet.add('apple');
mySet.add('banana');
mySet.add('apple'); // Duplicate entry, ignored

console.log(mySet.has('apple')); // Output: true
console.log(mySet.size); // Output: 2
