const square = x => x * x; 
console.log(square(9, "wow", 79)); //the extra arguments are ignored
//only 9 is required, works properly


const minus = (a,b) => {
    if (b === undefined) return -a;  //if b is not given, it would be undefined
    else return a - b; //if b is given, it would be there
}
console.log(minus(9)); //only a, b is undefined => -9
console.log(minus(10,1)); //both a and b are there => 10 -1 = 9


const minusOne = (a,b = 1) => { //default param is 1 if not given
    return a - b; 
}

console.log(minusOne(9)); //subtract 1 if no arg
console.log(minusOne(9,9)); //substract these if there is arg

