/**
 * 
 * In JavaScript specifically, callbacks are functions passed as arguments to other functions. 
 * These callback functions are then "called back" at a later point in time, 
 * often after asynchronous operations have completed. 
 * This allows your code to continue executing without being blocked by slow tasks.
 */


function fetchData(callback) {
    // Simulating fetching data asynchronously (e.g., from a server)
    setTimeout(function() {
      console.log("inside setTimeout");
    // Simulating fetching data from a server  
      const data = { name: "John", age: 30 };
      callback(data); // Execute the callback function with the fetched data
    }, 1000);
  }
  
  function processData(data) {
    console.log("inside processing");

    console.log("Processing data:", data);
  }
  
  // Using fetchData function with a callback
  console.log("calling processdata");
  fetchData(processData); // Pass processData as a callback function
  
/*********************************************************************** */


function func1(callback){
  console.log("inside func1");
  callback();
}

function func2(){
console.log("inside func2");
}

func1(func2);