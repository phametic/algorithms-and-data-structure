/* 
    The Fibonacci Sequence, which sums each number with the one before it, 
    is a great example of a problem that can be solved recursively.
*/

function fibs(num) {
    var fibSequence = [0,1];

    for(var i = 2; i < num; i++){
       fibSequence[i] = fibSequence[i-1] + fibSequence[i-2];
    }

    return fibSequence;
}

function fibsRec(num) {
    if(num < 2) return num;
        
    return fibsRec(num-1) + fibsRec(num-2)
}