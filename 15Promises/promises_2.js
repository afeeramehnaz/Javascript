let promise = new Promise(function(resolve, reject) {
    alert("Hello")
    resolve(56)
})

console.log("Hello One")
setTimeout(function() {
    console.log("Hello Two in 2 seconds")
}, 2000)

console.log("My name is " + "Hello Three")
console.log(promise)


//Hello One
//My name is Hello Three
//Promise {[[PromiseState]]: 'fulfilled', [[PromiseResult]]: 56}
//Hello Two in 2 seconds