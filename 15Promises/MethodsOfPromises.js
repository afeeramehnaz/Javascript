//Promise.resolve(): The Promise.resolve() method returns a Promise object that is resolved with a given value. This can be useful for converting non-promises into promises, or for creating a promise that resolves immediately.

const myPromise1 = Promise.resolve('Resolved');
myPromise1.then((result) => {
  console.log(result); // Output: Resolved
});

//Promise.reject(): The Promise.reject() method returns a Promise object that is rejected with a given reason (usually an error). This can be useful for creating a promise that is immediately rejected.
const myPromise2 = Promise.reject('Rejected');
myPromise2.catch((error) => {
  console.error(error); // Output: Rejected
});

//Promise.allSettled(): The Promise.allSettled() method returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describe the outcome of each promise.

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
    /*
    Output:
    [
      { status: 'fulfilled', value: 'Result of promise1' },
      { status: 'rejected', reason: 'Reason for rejection' },
      { status: 'fulfilled', value: 'Result of promise3' }
    ]
    */
  });

  //Promise.any(): The Promise.any() method takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, 
  //returns a single promise that resolves with the value from that promise. If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is 
  //rejected with an AggregateError, a new subclass of Error that groups together individual errors.
  
  Promise.any([promise1, promise2, promise3])
  .then((result) => {
    console.log(result); // Value of the first fulfilling promise
  })
  .catch((error) => {
    console.error(error); // AggregateError if all promises are rejected
  });

//Promise.race(): The Promise.race() method is used to wait for the first promise in an iterable to resolve or reject. It takes an iterable of promises as input and returns a Promise that settles as soon as any of the input promises settle.

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log(result); // Result of the first settling promise
  })
  .catch((error) => {
    console.error(error); // Output: Error if the first settling promise rejects
  });


  //Promise.all(): The Promise.all() method is used to wait for multiple promises to complete. It takes an iterable (e.g., an array) of promises as input and returns a single Promise that resolves when all of the input promises have resolved or rejects if any of the promises reject.

  Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // Array of results when all promises are resolved
  })
  .catch((error) => {
    console.error(error); // Output: Error if any promise rejects
  });

//then(): The then() method is used to handle the resolved value of a promise. It takes two optional arguments: the callback function for the success case (onFulfilled) and the callback function for the failure case (onRejected).

  myPromise.then(
    (result) => {
      console.log(result); // Output: Success
    },
    (error) => {
      console.error(error); // Output: Error
    }
  );
  
  //catch(): The catch() method is used to handle promise rejections. It's a shorthand for specifying only the failure callback using then().

  myPromise.catch((error) => {
    console.error(error); // Output: Error
  });
  
  //finally(): The finally() method is used to execute code after the promise is settled (either resolved or rejected). It allows you to run cleanup tasks regardless of the promise's outcome.
  myPromise.finally(() => {
    console.log('Cleanup'); // Output: Cleanup
  });
  