console.log(range(1,10)); 
console.log(range(5,2,-1)); 
console.log(sum(range(1,10))); 

function range(start, end) {
    let myArr = []; 
    for (let i = start; i <= end; i++) {
        myArr.push(i); 
    }
    return myArr;
}

