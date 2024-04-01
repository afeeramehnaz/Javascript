/**
 * 
Method chaining is a programming technique used in object-oriented programming where multiple method calls are chained together in a single statement, 
with each method being called on the return value of the previous method.
 This allows for a more concise and readable code.
 */
// Object with methods
const calculator = {
    value: 0,
    add: function(num) {
        this.value += num;
        return this; // Return the object itself to enable chaining
    },
    subtract: function(num) {
        this.value -= num;
        return this; // Return the object itself to enable chaining
    },
    multiply: function(num) {
        this.value *= num;
        return this; // Return the object itself to enable chaining
    },
    divide: function(num) {
        this.value /= num;
        return this; // Return the object itself to enable chaining
    },
    getResult: function() {
        return this.value;
    }
};

// Using method chaining
const result = calculator.add(5).subtract(3).multiply(2).divide(2).getResult();
console.log(result); // Output: 4
