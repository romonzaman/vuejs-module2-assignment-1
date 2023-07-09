/* ALL Excercise 1 to 11 are listed below.

// Excercise 1:
/*
    Write a function named destructureExample that takes in an object and an array as parameters. 
    The function should use destructuring to extract the values 'name' and 'age' from the object and 
    the values at index 0 and index 2 from the array. 
    
    The function should then return an object with the extracted values as properties with name and age.
*/
function destructureExample(param_obj, parm_arr) {
    const {name, age} = param_obj
    const [ind0, , ind2] = parm_arr
    return {name, age}
}


// Excercise 2:
/*
    Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator. 
    The function should return the sum of all the numbers.
*/

function sumNumbers(...arr) {
    return arr.reduce((a,b) => a+b)
}


// Excercise 3:
/*
    Write a function named createGreeting that takes in a name as a parameter and returns a greeting message using template literals. 
    The message should be in the format: "Hello, [name]! Welcome to our website."

*/

function createGreeting(name) {
    return `Hello, ${name}! Welcome to our website.`
}


// Excercise 4:
/*
    Write a function named isEven that takes in a number as a parameter and 
    returns the string "Even" if the number is even, and "Odd" if the number is odd. 
    
    Use a ternary operator instead of an if/else statement.
*/
function isEven(number) {
    return (number%2==0)?"Even": "Odd"
}


// Excercise 5:
/*
    Convert the following function to an arrow function:
    
    function multiply(a, b) {
      return a * b;
    }

*/
// const multiply = (a,b) => { return a*b; }
const multiply = (a,b) => a*b


// Excercise 6:
/*
    Write a function named getLargestNumber that takes in two numbers as parameters. 
    
    The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).

*/
function getLargestNumber(param1, param2) {

    return param1 && param2 ? (param1 > param2 ? param1 : param2) : param1 || param2;
}


// Excercise 7:
/*
    Write a function named getAddressCity that takes in an object representing a person's address. 
    The address object has properties 'street', 'city', and 'country'. 
    
    The function should return the value of the 'city' property if it exists, 
    or the string "Unknown" if it doesn't exist, using optional chaining.
*/
function getAddressCity(address) {
    return address?.city ?? "Unknown"
}


// Excercise 8:
/*
    Write a function named doubleNumbers that takes in an array of numbers and 
    returns a new array with each number doubled using the array map method.
*/
function doubleNumbers(arr) {
    return arr.map( a => a*2)
}


// Excercise 9:
/*
    Write a function named filterEvenNumbers that takes in an array of numbers and 
    returns a new array with only the even numbers using the array filter method.
*/
function filterEvenNumbers(arr) {
    return arr.filter(a => a%2 == 0)
}


// Excercise 10:
/*
    Write a function named sumArray that takes in an array of numbers and 
    returns the sum of all the numbers using the array reduce method.
*/
function sumArray(arr) {
    return arr.reduce( (a,b) => a+b)
}


// Excercise 11:
/*
    Write a function named sortNumbers that takes in an array of numbers and 
    returns a new array with the numbers sorted in ascending order using the array sort method.
*/
function sortNumbers(arr) {
    const newArr = [...arr]
    return newArr.sort((a,b) => a-b)
}

