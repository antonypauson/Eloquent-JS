function max(...numbers) { //any number of parameters
    let result = 0; 
    for (each of numbers) {
        if (each > result) result = each; 
    }
    return result; 
}

console.log(max(6,6,6,6,6,7)); //any number of parameters

const myArr = [3,4,2,5,10];
console.log(max(...myArr)); //if its an array, 
//we have to give each value like this 

let words = ["ant", "bee", "cat"];
console.log("I love ", ...words, "things");  

let coordinateObj = {x: 10, y: 11}; 
console.log({...coordinateObj, z: 100}); 