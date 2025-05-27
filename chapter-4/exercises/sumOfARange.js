console.log(range(1,10)); 
console.log(sum(range(1,10)));
console.log(range(1,10,2));  
console.log(range(5,2,-1)); 

function range(start, end, step=1) {
    let myArr = []; 
    if (step < 0) {
        for (let i = start; i >= end; i += step) {
            myArr.push(i); 
        }
    } else {
        for (let i = start; i <= end; i += step) {
            myArr.push(i); 
    }
    }
    
    return myArr;
}

function sum([...numbers]) {
    let sum = 0; 
    for (each of numbers) {
        sum += each; 
    }
    return sum; 
}

