//Here's a polyfill to filter an array [1, 2, 3, 4, 5] to only include odd numbers:


if (!Array.prototype.filterOdd) {
    Array.prototype.filterOdd = function() {
      if (this == null) {
        throw new TypeError('Array.prototype.filterOdd called on null or undefined');
      }
      
      const newArray = [];
      const len = this.length;
  
      for (let i = 0; i < len; i++) {
        if (typeof this[i] === 'number' && this[i] % 2 !== 0) {
          newArray.push(this[i]);
        }
      }
  
      return newArray;
    };
  }
  

const arr = [1, 2, 3, 4, 5];
const filteredArray = arr.filterOdd(); // Filter odd numbers

console.log(filteredArray); // Output: [1, 3, 5]
