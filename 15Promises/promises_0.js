/**
 * 
Promises are a fundamental concept in JavaScript used for handling asynchronous operations. 
They provide a more elegant way to deal with asynchronous code compared to traditional callback functions. 
Promises represent the eventual completion or
 failure of an asynchronous operation and allow you to attach callbacks to handle the results.
*/

/***********Creating a Promise*************** */

const myPromisee = new Promise((resolve, reject) => {
  // Asynchronous operation, e.g., fetching data from a server
  // If successful, call resolve
  // If failed, call reject
});


/**************Promise States***************/

// Pending: Initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.




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
  