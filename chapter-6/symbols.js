// Symbols are data type, guaranteed to be unique
// used for creating keys of properties

const sym1 = Symbol("description"); 
const sym2 = Symbol("description"); 

// console.log(sym1 == sym2); //both are different

const secretKey = Symbol("secretData"); //symbol

let user = {
    name: "Alice", 
    [secretKey]: "This is secret value" //symbol as key, square brackets must
}

// console.log(user[secretKey]); 

class Rabit { //class Rabit
    constructor(type) { //constructor
        this.type = type; 
    }

    speak(line) { //instance method
        console.log(`${this.type} rabbit says ${line}`); 
    }
}

let sym = Symbol("name"); 
// console.log(sym == Symbol("name")); 

Rabit.prototype[sym] = 55; 
let killerRabit = new Rabit("killer"); 
// console.log(killerRabit[sym]); 


// const length = Symbol("length"); //[length] symbol 
// Array.prototype[length] = 0; //give that length as property to Array

console.log([1,2].length); //calling .length of Array
// console.log([1,2][length]); //calling [length] of Array

const length = Symbol("symbol"); 

let myTrip = {
  length: 2,
  0: "Lankwitz",
  1: "Babelsberg",
  [length]: 21500
};

console.log(myTrip[length], myTrip.length);