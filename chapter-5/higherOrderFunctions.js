function greaterThan(n) {
    return m => m > n; 
} //closure example

let greaterThan10 = greaterThan(10); 
console.log(greaterThan10(50));
console.log("----------");


function noisy(f) {
    return(...args) => {
        console.log("calling with", args);
        let result = f(...args); 
        console.log("called with", args, ", returned", result);
        return result;  
    }
}
noisy(Math.min)(3,2,1);
//noisy(Math.min) first returns a function
//then (3,2,1) is called

console.log("----------");
function repeat(number, action) { //same as before, repeat action function 
    for (let i = number; i >= 0; i--) { //n times
        action(i); 
    }
}

function unless(test, then) { //if test() returns false, 
    if (!test) then();        //execute then() 
}

repeat(3, n=> { //repeat 3 times from 3 to 0
    unless(n % 2 == 1, () => { //returns false, print even
        console.log(n, "is even"); 
    }); 
}); 


let myArr = [2,4,6,8];
myArr.forEach(i => {
    console.log(i); 
}); 


