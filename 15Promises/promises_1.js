// Function that returns a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation (e.g., fetching data from an API)
        setTimeout(() => {
            const data = { message: 'Data fetched successfully!' };
            // Resolve the Promise with the data
            resolve(data);
            // Uncomment the line below to simulate a rejected Promise
            // reject(new Error('Failed to fetch data'));
        }, 2000);
    });
}

// Using the Promise
fetchData()
    .then(result => {
        console.log(result.message);
        // You can return another Promise here for chaining
        return new Promise((resolve) => {
            setTimeout(() => {  
                console.log('Additional operation completed.');
                resolve('Additional operation result');
            }, 1000);
        });
    })
    .then(additionalResult => {
        console.log('Additional Result:', additionalResult);
    })
    .catch(error => {
        console.error('Error:', error.message);
    })
    .finally(() => {
        console.log('Finally block: This will be executed no matter what.');
    });
