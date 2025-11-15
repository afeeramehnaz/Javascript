
/******************* reduce ***************************** */ 

/**
 reduce: The reduce method applies a function to each element of an array to reduce it to a single value. 
 It iterates over the array and maintains an accumulator (initial value provided as an argument), 
 which accumulates the result of the callback function applied to each element. 
 The callback function receives four arguments: the accumulator, 
 the current element, the index of the current element, and the array being traversed.
 */

let arr3 = [1, 2, 3, 5, 2, 1]
const reduce_func = (h1, h2) => {
  console.log(h1,h2);
  return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)