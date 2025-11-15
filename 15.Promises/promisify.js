
/*promisify is a utility function that converts a function with a callback-based API into a function that returns a Promise.*/


// Define a function with a callback-based API
function fetchDataFromServer(data, callback) {
    // Simulate asynchronous operation
    setTimeout(() => {
      if (data === 'valid') {
        callback(null, { message: 'Data fetched successfully' });
      } else {
        callback(new Error('Invalid data'));
      }
    }, 1000);
  }
  
  // Define promisify function
  function promisify(func) {
    return function (...args) {
      return new Promise((resolve, reject) => {
        func(...args, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    };
  }
  
  // Convert fetchDataFromServer to a Promise-based function
  const fetchDataFromServerAsync = promisify(fetchDataFromServer);
  
  // Usage of the Promise-based function
  fetchDataFromServerAsync('valid')
    .then((data) => {
      console.log(data.message); // Output: Data fetched successfully
    })
    .catch((error) => {
      console.error(error.message); // Output: Invalid data
    });
  