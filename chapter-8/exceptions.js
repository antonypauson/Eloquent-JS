const prompt = require('prompt-sync')();

//ERROR HANDLING

function promptDirection(question) { //this throws error
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error(`Invalid direction: ${result}`); //error returns
}

function look() { //this function doesn't concern about error
    if (promptDirection("Which way?") == "L") {
        return "a house";
    } else {
        return "two angry bears";
    }
}

try {
    console.log("You see ", look());
} catch (error) {
    console.log("Something went wrong: " + error); 
}