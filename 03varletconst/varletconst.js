let a=10;
const str="afeera";
var c=200;

console.log(a);//10
console.log(str);//afeera
console.log(c);//200
/* ************************************************* */
a=100;
console.log(a);//100

c=500;
console.log(c);//500

/* ************************************************* 
let is block-scoped. It means that a variable declared with let is only visible within the block (inside {}) in which it is defined.
*/
var d=12
{
    let a="afeera";
    console.log(a);//afeera
}
console.log(a);//100


/* ************************************************* */



//str="sabhi";
//console.log(str);//Uncaught TypeError TypeError: Assignment to constant variable.

/* ************************************************* 
var is function-scoped. It means that a variable declared with var is visible within the function in which it is declared, regardless of block scope.
*/
function example()
{
    var z=999;
    console.log("Inside function z:",z);
}
example();//Inside function z: 999
//console.log(z);//Uncaught ReferenceError ReferenceError: z is not defined



/* ************************************************* 
Variables declared with var are hoisted to the top of their function or global scope and initialized with undefined.
*/

console.log(f); // Output: undefined
var f = 30;
console.log(f); // Output: 30

/************************************************************
 * Variables declared with let are hoisted to the top of their block scope but aren’t initialized. Accessing them before the declaration results in a ReferenceError.
 * 
 */
console.log(letter);//Uncaught ReferenceError ReferenceError: Cannot access 'letter' before initialization
let letter="ABC";


