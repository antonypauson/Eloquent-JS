import parse from '../parser.js'; 

function compiler(expression) {
    if (expression.type == "value") {
        return JSON.stringify(expression.value); 
    } else if (expression.type == "word") {
        return expression.name; 
    } else if (expression.type == "apply") {
        let {operator, args} = expression; 

        if (operator.type == "word" && operator.name == "if") {
            if (args.length !== 3) throw new SyntaxError("Bad number of args to if");
             return `(${compiler(args[0])} ? ${compiler(args[1])} : ${compiler(args[2])})`;
        }

        // if (operator.type == "word" && operator.name == "while") {
        //     if (args.length !== 2) throw new SyntaxError("Bad number of args to while");
        //     return ``
        // }

        // if (operator.type == "word" && operator.name == "do") {

        // }

        // if (operator.type == "word" && operator.name == "define") {

        // }

    }
}

function run(program) {
    let expression = parse(program);
    // console.log(expression)
    const jsCode = compiler(expression); 
    console.log(jsCode);
    return Function(jsCode)(); 
}

console.log(run(`if(true,true,true)`))