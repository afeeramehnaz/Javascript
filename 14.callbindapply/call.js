

/**************call************* */
/*

In JavaScript, call, bind, and apply are methods used to manipulate the this keyword in functions and to
invoke functions with a specific context or arguments.

*/

//call: The call() method calls a function with a given this value and arguments provided individually.


//Syntax:
Function.call(this,args)
Function.apply(this,args)
Function.bind(this,args)



function person(name,age){
  this.name=name;
  this.age=age;
}

function greet(place){
    console.log(`Hello I'm ${this.name}  and my age is ${this.age} and I'm in ${place}`); 
}

const details=new person('afeera',26);
greet.call(details,'dhaka');