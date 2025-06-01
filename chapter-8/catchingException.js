const prompt = require('prompt-sync')();

for(;;) {
    try {
        let direction = promptDirection("Where?");
        console.log(`You chose ${direction}`);
        break;
    } catch (e) {
        if (e instanceof InputError) {
            console.log("Not a valid direction. ");
        } else {
            throw e; 
        }
    }
}

class InputError extends Error {}

    function promptDirection(question) { //this throws error
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new InputError(`Invalid direction: ${result}`); //error returns
}
