if (!Promise.all) {
    Promise.all = function(promises) {
        return new Promise(function(resolve, reject) {
            if (!Array.isArray(promises)) {
                return reject(new TypeError('Promise.all argument must be an array'));
            }
            
            var results = [];
            var completedPromises = 0;

            promises.forEach(function(promise, index) {
                Promise.resolve(promise).then(function(result) {
                    results[index] = result;
                    completedPromises++;
                    if (completedPromises === promises.length) {
                        resolve(results);
                    }
                }).catch(reject);
            });

            if (promises.length === 0) {
                resolve(results);
            }
        });
    };
}

// Usage of the polyfilled Promise.all()
const promise1 = Promise.resolve(1);
const promise2 = 2;
const promise3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 3);
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
    console.log(values); // Output: [1, 2, 3]
});
