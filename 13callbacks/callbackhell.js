/*********CallBack Hell*********************** */
/**
 * Callback hell refers to a situation in asynchronous programming where code becomes difficult to manage due
 *  to the nesting of multiple callback functions. 
 * In environments like JavaScript, which heavily use callbacks for asynchronous operations, this can occur 
 * when you have numerous nested callback functions, leading to code that is hard to read, understand, and maintain.
 */

// Example 1: Nested setTimeouts
setTimeout(() => {
    console.log('Task 1 completed');
    
    setTimeout(() => {
        console.log('Task 2 completed');
        
        setTimeout(() => {
            console.log('Task 3 completed');
        }, 1000);
    }, 1000);
}, 1000);

// Task 1 completed
// Task 2 completed
// Task 3 completed


// Example 2: Nested AJAX (assuming a simplified scenario)
ajax('GET', '/api/resource1', (response1) => {
    console.log('Request 1 completed');
    
    ajax('GET', '/api/resource2', (response2) => {
        console.log('Request 2 completed');
        
        ajax('GET', '/api/resource3', (response3) => {
            console.log('Request 3 completed');
        });
    });
});

function ajax(method, url, callback) {
    // Simulating an asynchronous AJAX request
    setTimeout(() => {
        console.log(`AJAX ${method} request to ${url}`);
        callback(`Response from ${url}`);
    }, 1000);
}
