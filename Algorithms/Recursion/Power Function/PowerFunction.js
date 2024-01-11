/* 
    Write a function called power which takes in a base and an exponent. 
    If the exponent is 0, return 1.
*/

function power(base, exponent) {
    //Base case - if the exponenet is 1 return 1;
    if(exponent === 0) return 1;
    return base * power(base, exponent - 1)
}

console.log(power(2, 3));