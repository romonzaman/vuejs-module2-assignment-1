/*
    Write a function named getLargestNumber that takes in two numbers as parameters. 
    
    The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).

*/
function getLargestNumber(param1, param2) {

    return param1 && param2 ? (param1 > param2 ? param1 : param2) : param1 || param2;
}


// console.log(getLargestNumber(10, 5))