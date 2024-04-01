// Asynchronous function using async/await
async function fetchData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Data fetched!');
      }, 1000);
    });
  }
  
  // Using the async function
  async function processData() {
    const result = await fetchData();
    console.log(result);
  }
  
  // Calling the async function
  processData(); // Output after 1 second: Data fetched!
  