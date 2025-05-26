//function with a single param
const square = n => n * n; 
console.log(square(9));


//function with no params
const sayHi = () => {
    return "BANG BANG"; 
}
console.log(sayHi());

//function keyword function
const greet = function(name) {
    console.log(`Hello ${name}`); 
}

greet("Tony"); 
greet("Tony"); 
greet("Tony"); 
greet("Tony"); 
greet("Tony"); 
greet("Tony"); 
greet("Tony"); 


//Maximum Call stack exceeded
//call stackil main -> function1 -> function2
//call stack is popped if the function execution is complete
const chicken = function() {
    return egg(); 
}

const egg = function() {
    return chicken(); 
}

chicken(); //chicken() -> egg() -> chicken() ->...

