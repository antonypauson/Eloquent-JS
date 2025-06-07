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
        expression = {type: "value", value: Number(match[0])};
    } else if (match = /^[^\s(),#"]+/.exec(program)) {
        expression = {type: "word", name: match[0]}; 
    } else {
        throw new SyntaxError("Unexpected syntax: " + program); 
    }

    return parseApply(expression, program.slice(match[0].length)); 
}


//set up this dude
function parseApply(expression, program) {
    program = skipSpace(program); 

    if (program[0] != "(") {
        return {expression: expression, rest: program};
    }

    program = skipSpace(program.slice(1)); 

    expression = {type: "apply", operator: expression, args: []}; 

    while (program[0] != ")") {
        let arg = parseExpression(program); 
        expression.args.push(arg.expression); 
        program = skipSpace(arg.rest); 
        if (program[0] == ",") {
            program = skipSpace(program.slice(1)); 
        } else if (program[0] != ")") {
            throw new SyntaxError("Expected ',' or ')'"); 
        }
    }

    return parseApply(expression, program.slice(1)); 
}

export default function parse(program) {
    let {expression, rest} = parseExpression(program);

    if (skipSpace(rest).length > 0) {
        throw new SyntaxError("Unexpected text after program");
    }
    return expression; 
}

// console.log(JSON.stringify(parse("if(>(a,b))"), null, 2)); 