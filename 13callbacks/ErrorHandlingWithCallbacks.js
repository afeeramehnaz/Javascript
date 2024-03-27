function asyncOperation(callback) {
  setTimeout(function() {
    const error = null; // Simulating no error
    const data = "Result of async operation";
    callback(error, data);
  }, 1000);
}

asyncOperation(function(error, data) {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Data:", data);
  }
});


//Data: Result of async operation
