console.log('Start');

function asynchronousFunction() {
    setTimeout(() => {
        console.log('Doing something asynchronous');
    }, 2000);
}

asynchronousFunction();

console.log('End');

//Start
//End
//Doing something asynchronous