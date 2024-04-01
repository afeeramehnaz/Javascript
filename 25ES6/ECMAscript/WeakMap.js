/********************WeakMap*************************/
/*
A WeakMap is a collection of key-value pairs where keys are weakly referenced. 
This means that if there are no other references to a key stored in a WeakMap, the key-value pair can be garbage collected.
*/

let weakMap = new WeakMap();

let key = {};
let value = 'some value';

weakMap.set(key, value);
