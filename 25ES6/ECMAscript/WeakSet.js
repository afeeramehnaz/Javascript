/**************************WeakSet***************/
/*
A WeakSet is a collection of unique objects where the object references are weakly held. 
This means that if there are no other references to an object stored in a WeakSet, it can be garbage collected.
*/

let weakSet = new WeakSet();

let obj1 = {};
let obj2 = {};

weakSet.add(obj1);
weakSet.add(obj2);
