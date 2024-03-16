/**
 * 
 * promises are a mechanism used for asynchronous programming. They are objects that represent the eventual completion (or failure) of an asynchronous operation and allow you to handle the result (or error) of that operation when it becomes available.

Here's a basic overview of promises:

States: A promise can be in one of three states:

1.Pending: Initial state, neither fulfilled nor rejected.
2.Fulfilled: The operation completed successfully.
3.Rejected: The operation failed.

Handling results: Promises provide methods (then(), catch(), and finally()) to handle the result or error of an asynchronous operation once it's completed.

Chaining: Promises can be chained together using then() to perform multiple asynchronous operations sequentially or in parallel.

Error handling: Promises allow for elegant error handling through the catch() method, which is executed when a promise is rejected.
 */


// Creating a promise
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 2000);
  });
  
  // Consuming the promise
  myPromise
    .then((data) => {
      console.log(data); // Output: Data fetched successfully
    })
    .catch((error) => {
      console.error(error); // Output: Error fetching data
    })
    .finally(() => {
      console.log("Promise completed"); // Output: Promise completed
    });
  