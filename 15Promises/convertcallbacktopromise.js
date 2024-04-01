function callbackFunction(param1, param2, callback) {
    // Perform some asynchronous operation
    // Call the callback with the result
    // Example: setTimeout simulates an asynchronous operation
    setTimeout(() => {
        const result = param1 + param2;
        callback(null, result); // First argument is error (if any), second argument is result
    }, 1000);
}

// Convert callbackFunction to Promise-based function
function promiseFunction(param1, param2) {
    return new Promise((resolve, reject) => {
        callbackFunction(param1, param2, (error, result) => {
            if (error) {
                reject(error); // Reject the Promise if an error occurs
            } else {
                resolve(result); // Resolve the Promise with the result
            }
        });
    });
}

// Usage of the Promise-based function
promiseFunction(2, 3)
    .then(result => {
        console.log('Result:', result); // Output: Result: 5
    })
    .catch(error => {
        console.error('Error:', error);
    });
