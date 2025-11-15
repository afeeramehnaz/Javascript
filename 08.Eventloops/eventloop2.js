console.log("Start");

// Simulating asynchronous HTTP request 1
setTimeout(function() {
  console.log("Data from API 1 received");
}, 2000); // Executes after 2000 milliseconds (2 seconds)

// Simulating asynchronous HTTP request 2
setTimeout(function() {
  console.log("Data from API 2 received");
}, 1000); // Executes after 1000 milliseconds (1 second)

console.log("End");


/******output******/
/*
Start
End
Data from API 2 received
Data from API 1 received
*/
