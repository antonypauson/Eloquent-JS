// [Symbol.iterator] enna method ulla objects are the only ones that are iteratable
// eg **for (let each of something)**
// here 'something' can be array, string
// meaning it have [Symbol.iterator] method

// **let iterator = something[Symbol.iterator()]** returns an object which follows iterator interface. It will have **next()**, which gives
// {
//     value: next-value, 
//     done: true/false
// }

let array = ["A", "B"]; 
let iterator = array[Symbol.iterator](); 

// console.log(iterator.next()); 
// console.log(iterator.next());
// console.log(iterator.next());  

//another example
let okIterator = "OK"[Symbol.iterator]();

console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());   