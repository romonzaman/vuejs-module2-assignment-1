/*
    Write a function named isEven that takes in a number as a parameter and 
    returns the string "Even" if the number is even, and "Odd" if the number is odd. 
    
    Use a ternary operator instead of an if/else statement.
*/
function isEven(number) {
    return (number%2==0)?"Even": "Odd"
}


// console.log(isEven(7))