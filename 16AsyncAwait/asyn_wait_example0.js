/**
 * 
 *  
Async/await is a modern JavaScript feature that simplifies asynchronous programming and makes it look synchronous, thus making asynchronous code easier to read and write. It allows you to write asynchronous code in a synchronous-like manner, without using callbacks or chaining promises.

Here's how async/await works:

Async Functions:

An async function is a function declared with the async keyword. It operates asynchronously via the event loop, returning a Promise implicitly. Inside an async function, you can use the await keyword to pause the execution of the function until the Promise is resolved or rejected.
Await Operator:

The await keyword is used to pause the execution of an async function until the Promise is settled (either resolved or rejected). When using await, the async function will wait for the Promise to resolve, and then it will continue its execution.
 
*/

// Example function simulating asynchronous data fetching
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully');
    }, 2000);
  });
}

// Async function using await to handle the asynchronous operation
async function getData() {
  try {
    console.log('Fetching data...');
    const result = await fetchData();
    console.log(result); // Output: Data fetched successfully
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Calling the async function
getData();
