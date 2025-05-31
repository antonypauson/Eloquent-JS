const prompt = require('prompt-sync')();

console.log(promptNumber("How many trees you see? "))

function promptNumber(question) {
    let input = Number(prompt(question));
    if (Number.isNaN(input)) return null; 
    return input; 
}

function lastElement(array) {
    if (array.length == 0) return {failed: true};
    return {value: array[array.length - 1]};
}