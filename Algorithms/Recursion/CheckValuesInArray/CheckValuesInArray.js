/* 
    Write a function called all which accepts an array and a callback and returns true 
    if every value in the array returns true when passed as parameter to the callback function

    Sample:

    var allAreLessThanSeven = all([1,2,9], function(num){
        return num < 7;
    });

    console.log(allAreLessThanSeven); // false
*/

var allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});

function all(arr, callBackFunc) {
    var copy = copy || arr.slice();
    console.log(copy);

    if(copy.length === 0) return true;

    if(callBackFunc(copy[0])) {
        copy.shift();
        console.log("Less than 7")
        return all(copy, callBackFunc)
    } else {
        return false;
    }
}

console.log(allAreLessThanSeven);