
/*****************Map**************** */

/**
Imagine you have a list of numbers and want to double each one. map comes to the rescue! It takes a function (your transformation rule) and applies it to each element in the original list, creating a new list with the transformed values.

map doesn't modify the original list, it creates a new one.
The function you provide defines the transformation applied to each element.
It's useful for tasks like converting data types, formatting strings, or applying calculations.
 */
let arr = [45, 23, 21]
// Array map method
let a = arr.map((value, index) => {
  console.log(value, index)
  return value + index
})
/*************Filter*************************************** */
/**
Need to pick out only the even numbers from the doubled list? filter is your friend! It takes a function (your selection criteria) and returns a new list containing only the elements that pass the test.

filter also creates a new list, leaving the original untouched.
The function you provide defines the condition for keeping elements.
It's useful for extracting specific data based on criteria, like finding matching items or removing unwanted values.
 */

//Array filter method
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a) => {
  return a < 10
})
console.log(a2, arr2)

/******************* reduce ***************************** */ 

/**
 * In JavaScript, the reduce method is a powerful array function that "reduces" an array to a single value. 
 * It executes a provided function once for each element in the array and accumulates the results into a single value. 
 * reduce starts with an initial value (called the accumulator) and combines elements one by one.
The function you provide defines how elements are combined with the accumulator.
It's useful for summarizing data, finding minimum/maximum values, or merging elements into a single result.
 */

let arr3 = [1, 2, 3, 5, 2, 1]
const reduce_func = (h1, h2) => {
  console.log(h1,h2);
  return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)