/* 
    Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
    Sample:
    var nestedObject = {
        data: {
            info: {
                stuff: {
                    thing: {
                        moreStuff: {
                            magicNumber: 44,
                            something: 'foo2'
                        }
                    }
                }
            }
        }
    }

    let hasIt = contains(nestedObject, 44); // true
    let doesntHaveIt = contains(nestedObject, "foo"); // false
*/
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}
let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
console.log(hasIt, doesntHaveIt);

function contains(obj, value) {
    for(var key in obj) {
        if(typeof obj[key] === 'object') {
            return contains(obj[key], value)
        }
        if(obj[key] === value) {
            return true
        }
    }
    return false;
}