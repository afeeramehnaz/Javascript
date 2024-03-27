const promise1 = fetchData1();
const promise2 = fetchData2();

Promise.all([promise1, promise2])
    .then(([result1, result2]) => {
        // Handle both results
    })
    .catch((error) => {
        // Handle errors
    });

//Example

//Suppose you have two asynchronous operations: one fetching user data from an API and another fetching product data. 
//You want to execute both operations concurrently and wait for both to complete before proceeding. 
//You can achieve this using Promise.all().

function fetchUserData() {
    return new Promise((resolve, reject) => {
        // Simulate fetching user data asynchronously
        setTimeout(() => {
            const userData = { id: 1, name: 'John Doe' };
            resolve(userData);
        }, 2000); // Simulating a delay of 2 seconds
    });
}

function fetchProductData() {
    return new Promise((resolve, reject) => {
        // Simulate fetching product data asynchronously
        setTimeout(() => {
            const productData = { id: 101, name: 'Laptop', price: 999.99 };
            resolve(productData);
        }, 1500); // Simulating a delay of 1.5 seconds
    });
}

// Using Promise.all to fetch both user data and product data concurrently
Promise.all([fetchUserData(), fetchProductData()])
    .then(([userData, productData]) => {
        console.log('User Data:', userData);
        console.log('Product Data:', productData);
        // Here, you can proceed with both user and product data available
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });
