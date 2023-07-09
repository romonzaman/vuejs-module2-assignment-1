/*
    Write a function named sumArray that takes in an array of numbers and 
    returns the sum of all the numbers using the array reduce method.
*/
function sumArray(arr) {
    return arr.reduce( (a,b) => a+b)
}


// console.log(sumArray([1, 2, 3, 4, 5]))