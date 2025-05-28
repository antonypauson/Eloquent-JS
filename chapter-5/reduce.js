const SCRIPTS = require('./SCRIPTS.js'); 

//find the sum 
//                  array------what to do----start value
console.log(reduce([1,2,3,4], (a,b) => a + b, 0)); 

function reduce(array, combine, intial) {
    let current = intial;
    for (let element of array) {
        current = combine(current, element); 
    } 
    return current; 
}

//default reduce method
console.log([1,2,3,4].reduce((a,b) => a + b));