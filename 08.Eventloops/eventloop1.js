/************Event loop***************************** */
/**
 * 
 * In JavaScript, the event loop is a mechanism that controls the execution flow of asynchronous operations. 
 * It is fundamental to how JavaScript handles events, callbacks, and non-blocking I/O operations.

JavaScript is single-threaded, meaning it can only execute one piece of code at a time. 
This thread is responsible for executing the JavaScript code, handling events, 
and managing asynchronous tasks. The event loop is what allows JavaScript to perform
non-blocking operations efficiently.
 */

console.log("Start");

setTimeout(function() {
  console.log("Inside setTimeout");
}, 2000); // Executes after 2000 milliseconds (2 seconds)

console.log("End");
 

/***output*******/

// Start
// End
// Inside setTimeout



/*****Execution of event loop ***************/

/*
Now, here's how the event loop handles this:

1.Initially, the call stack contains the console.log("Start") and setTimeout calls.

2.The console.log("Start") call is executed, and "Start" is logged to the console. Then, it's removed from the call stack.

3.Next, the setTimeout function is called. Since setTimeout is asynchronous, it's moved out of the main execution flow and scheduled to be executed after the specified delay (2000 milliseconds). After scheduling, setTimeout is removed from the call stack.

4.The console.log("End") call is executed, and "End" is logged to the console. Then, it's removed from the call stack.

5.Now, the main execution stack is empty, and the event loop continuously checks if there are any functions waiting in the callback queue.

6.After 2000 milliseconds, the callback function provided to setTimeout (console.log("Inside setTimeout")) is moved from the callback queue to the execution stack.

7.The callback function is executed, and "Inside setTimeout" is logged to the console. Then, the callback function is removed from the call stack.

*/