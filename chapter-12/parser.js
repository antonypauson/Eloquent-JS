function skipSpace(string) {
    let first = string.search(/\S/); //anything except space
    // console.log(first);
    if (first == -1) {
        return ""; 
    }
    return string.slice(first); 
}

function parseExpression(program) {
    program = skipSpace(program); 

    let match, expression;
    if (match = /^"([^"]*)"/.exec(program)) {
        expression = {type: "value", value: match[1]};
    } else if (match = /^\d+\b/.exec(program)) {
        expression = {type: "value", value: match[0]};
    } else if (match = /^[^\s(),#"]+/.exec(program)) {
        expression = {type: "word", name: match[0]}; 
    } else {
        throw new SyntaxError("Unexpected syntax: " + program); 
    }

    return parseApply(expression, program.slice(match[0].length)); 
}

parseExpression("121")


function parseApply(expression, program) {
    console.log(expression)
    console.log(program);
}
