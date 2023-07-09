/*
    Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator. 
    The function should return the sum of all the numbers.
*/
function sumNumbers(...arr) {
    return arr.reduce((a,b) => a+b)
}


// console.log(sumNumbers(1, 2, 3, 4, 5))