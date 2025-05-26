function wrapValue(n) {
    let local = n; //passes n to local
    return () => local; //returns an anony function
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1()); //1
console.log(wrap2()); //2
console.log("-----------------"); 



function multiplier(factor) {
    return number => number * factor; //returns this function
}

let twice = multiplier(2); //returns number => number * 2 function
console.log(twice(5)); //returns 5 => 5 * 2 answer
console.log("-----------------"); 


//practical example of closure
function makeCounter() {
    let count = 0; 
    return () => count += 1; //keeps track of count, paramless function
}

let counter1 = makeCounter();
let counter2 = makeCounter(); 
console.log(counter1()); //1
console.log(counter1()); //2
console.log(counter2()); //1
console.log(counter1()); //3