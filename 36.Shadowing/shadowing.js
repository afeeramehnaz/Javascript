/** 
 * Shadowing in programming occurs when a variable declared within a certain scope has the same name as a
 *  variable in an outer scope. The inner variable "shadows" or hides the outer variable within its scope. 
 *  This can lead to unexpected behavior if not handled carefully.

 * 
*/


var a=100
{  
    console.log(a);//shadowing.js:12 Uncaught ReferenceError: Cannot access 'a' before initialization
    let a=50;
}
a=30;

/****************************** */

let x = 10; // Outer variable

function outerFunction() {
  let x = 20; // Inner variable, shadows the outer variable
  console.log("Inner:", x);
}

outerFunction();
console.log("Outer:", x);

//Output:
//Inner: 20
//Outer: 10

/***************************************** */

let b = 10;

function myFunction(b) {
  console.log("Parameter:", b); // Parameter shadows the outer variable
}

myFunction(5);
console.log("Outer:", b);

//Output:
// Parameter: 5
// Outer: 10