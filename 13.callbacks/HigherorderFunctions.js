/***************Higher-order Functions**************
 Functions that can accept other functions as arguments or return functions are called higher-order functions. 
Callbacks often work hand-in-hand with higher-order functions to provide flexibility and modularity in JavaScript code.*/

function higherOrderFunction(callback) {
    console.log("Executing higher-order function");
    callback();
  }
  
  function callbackFunction() {
    console.log("Executing callback function");
  }
  
  // Passing callbackFunction as an argument to higherOrderFunction
  higherOrderFunction(callbackFunction);
  