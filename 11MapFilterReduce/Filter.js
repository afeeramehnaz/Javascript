
/*************Filter*************************************** */
/**
 * filter: The filter method creates a new array containing only the elements of
 * an existing array that pass a specified test (predicate) provided by a callback function. 
 * The callback function is executed for each element in the array, and if it returns true, 
 * the element is included in the new array. 
 * If the callback function returns false, the element is excluded. The original array remains unchanged.
 */

//Array filter method
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a) => {
  return a < 10
})
console.log(a2, arr2)//[0, 3, 5] [45, 23, 21, 0, 3, 5]

/************************** */

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
// evenNumbers: [2, 4]
