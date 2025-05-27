let myArray = ["A", "B", "C", "D"]; 
console.log(reverseArray(myArray));
console.log(reverseArrayInPlace(myArray));
console.log(myArray); 

let arrayValues = [1,2,3,4,5]; 
reverseArrayInPlace(arrayValues); 
console.log(arrayValues); 

function reverseArrayInPlace(myArray) {
    let start = 0; 
    let end = myArray.length - 1; 

    while (start <= end) {
        let temp = myArray[start];
        myArray[start] = myArray[end];
        myArray[end] = temp; 
        start++; 
        end--; 
    }
}

function reverseArray(myArray) {
    let result = []; 

    for (let each of myArray) {
        result.unshift(each); 
    }
    return result; 
}