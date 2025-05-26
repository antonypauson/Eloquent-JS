console.log(countBs("BOBBBB"));
console.log(countChar("kakkelak", "k")); 

function countBs(myString) {
    let count = 0; 

    for (let i = 0; i < myString.length; i++) {
        if (myString[i] == 'B') count++; 
    }
    return count; 
}

function countChar(myString, char) {
    let count = 0; 
    let i = 0; 
    while (i < myString.length) {
        if (myString[i] == char) count++; 
        i++; 
    }
    return count; 
}