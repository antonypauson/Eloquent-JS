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

