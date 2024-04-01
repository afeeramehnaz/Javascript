//Here's a polyfill for the reduce() method to sum the elements of an array [1, 2, 3, 4, 5]:



if (!Array.prototype.customReduce) {
  Array.prototype.customReduce = function(callback, initialValue) {
    if (this == null) {
      throw new TypeError('Array.prototype.customReduce called on null or undefined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    const len = this.length;
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < len; i++) {
        accumulator = accumulator + this[i];
    }

    return accumulator;
  };
}


const arr = [1, 2, 3, 4, 5];
const sum = arr.customReduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum); // Output: 15
