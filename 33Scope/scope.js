// /******************Re-initialize*********************/
let a=100;
a=50;
console.log(a);//50

// /************* */

var b=100
b=3000
console.log(b);//3000


// /*************** */

const c=100
c=500;
console.log(c);//scope.js:16 Uncaught TypeError: Assignment to constant variable.

// /****************Re-declare***********************/


let ab=900;
console.log(ab);//Uncaught SyntaxError: Identifier 'a' has already been declared 

var b=900;
console.log(b);//900

const c=11
console.log(c);//scope.js:28 Uncaught SyntaxError: Identifier 'c' has already been declared 

/*******************Window************************************** */
var x=100;
let y=80;
const z=40;

console.log(window);
console.log(window.x);//100
console.log(window.y);//undefined
console.log(window.z);//undefined
console.log(this);

/************************strict mode********************************* */

'use strict'
var f=10;
g=10;
console.log(f);
console.log(g);