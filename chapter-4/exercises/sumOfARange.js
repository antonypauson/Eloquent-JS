console.log(range(1,10)); 
console.log(sum(range(1,10))); 

function range(start, end) {
    let myArr = []; 
    for (let i = start; i <= end; i++) {
        myArr.push(i); 
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

