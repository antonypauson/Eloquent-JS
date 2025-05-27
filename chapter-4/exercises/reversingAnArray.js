let myArray = ["A", "B", "C", "D"]; 
console.log(reverseArray(myArray));

function reverseArray(myArray) {
    let result = []; 

    for (let each of myArray) {
        result.unshift(each); 
    }

    return result; 
}