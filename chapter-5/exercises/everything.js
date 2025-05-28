console.log(every([1,3,5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

function every(array, test) {
    return !array.some(element => !test(element));
}

function every2(array, test)  {
    
    for (let each of array) {
        if (!test(each)) {
            return false; 
        }
    }
    return true; 
}

