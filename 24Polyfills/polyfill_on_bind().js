// Check if the bind method is available, if not, define the polyfill
if (!Function.prototype.bind) {
    Function.prototype.bind = function(context) {
        var fn = this; // Reference to the original function
        var args = Array.prototype.slice.call(arguments, 1); // Extract arguments passed to bind excluding the first one

        return function() {
            // Concatenate arguments passed to bind with arguments passed during function invocation
            var boundArgs = args.concat(Array.prototype.slice.call(arguments));
            // Invoke the original function with context as 'this' and combined arguments
            return fn.apply(context, boundArgs);
        };
    };
}

// Example usage of the polyfilled bind method
var module = {
    x: 42,
    getX: function() {
        return this.x;
    }
};

var unboundGetX = module.getX;
console.log(unboundGetX()); // Output: undefined

var boundGetX = module.getX.bind(module);
console.log(boundGetX()); // Output: 42
