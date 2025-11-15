/*********************Closures************* */
/*
Closures are a powerful and fundamental concept in JavaScript. 
A closure occurs when a function is defined inside another function, 
and the inner function has access to the variables of the outer (enclosing) function 
even after the outer function has finished executing. In simpler terms, a closure "closes over"
the variables of its outer function.

 */

 function outerFunction() {
    let outerVariable = "I am from outerFunction";
  
    function innerFunction() {
      console.log("Iam called from inner function accessing the outer variable ",outerVariable);
    }
  
    return innerFunction;
  }
  
  const closure = outerFunction();
  closure(); // Outputs: Iam called from inner function accessing the outer variable  I am from outerFunction
  
  
/*********************************************************************** */
  function createMultiplier(factor) {
    return function (number) {
      return number * factor;
    };
  }
  
  const double = createMultiplier(2);
  console.log(double);
  console.log(double(5)); // Outputs: 10
  /********************************************************************* */

  function fetchData(url, callback) {
    // Simulate asynchronous data fetching
    setTimeout(function () {
      const data = "Some data from " + url;
      callback(data);
    }, 1000);
  }
  
  fetchData("https://example.com", function (result) {
    console.log(result); // Outputs: Some data from https://example.com
  });
  