function merge(left, right) {
    let sortedArr = [];

    while(left.length && right.length) {
        // If the left number is smaller than the right number
        if(left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
    // Base Case
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    // Recursive calls
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

var testInput = [3, 2, 1, 13, 8, 5, 0, 1];

console.log(mergeSort(testInput))