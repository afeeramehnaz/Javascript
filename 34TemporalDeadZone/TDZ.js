/****************************Temporal Dead Zone (TDZ)********************************** */
/*The Temporal Dead Zone (TDZ) is a concept in JavaScript that refers to the period between entering scope and being able to access a variable. 
This happens with variables declared using let and const keywords before their actual declaration in the code.
*/


console.log(x); // Throws ReferenceError: Cannot access 'x' before initialization
let x = 10;
