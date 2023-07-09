/*
    Write a function named sortNumbers that takes in an array of numbers and 
    returns a new array with the numbers sorted in ascending order using the array sort method.
*/
function sortNumbers(arr) {
    const newArr = [...arr]
    return newArr.sort((a,b) => a-b)
}


// console.log(sortNumbers([5, 2, 8, 1, 4]))