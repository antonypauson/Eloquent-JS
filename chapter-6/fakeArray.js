let fakeArray = { //creating a fake array
    length: 3,  //have 'length' like an array
    0: "First",  //have indices from 0 like an array
    1: "Second", 
    2: "Third"
}

// console.log(Array.isArray(fakeArray)) //false

//using call(), we use 'forEach' which only works on real array
// Array.prototype.forEach.call(fakeArray, each => console.log(each)); 



fakeArrayCall("a", "b", "c"); 

function fakeArrayCall() { //doesn't have any arguments
    Array.prototype.forEach.call(arguments, args => {
        console.log(args); 
    }) //arguments is like a fake array, so we called it using .call()
}