import parse from './parser.js'; 

const specialForms = Object.create(null); 

function evaluate(expression, scope) {
    if (expression.type == "value") {
        return expression.value; 
    } else if (expression.type == "word") {
        if (expression.name in scope) {
            return scope[expression.name]; 
        } else {
            throw new ReferenceError(`Undefined binding: ${expression.name}`); 
        }
    } else if (expression.type == "apply") {
        let {operator, args} = expression;
        if (operator.type == "word" && operator.name in specialForms) {
            return specialForms[operator.name](args, scope); //expression.args? 
        } else {
            let op = evaluate(operator, scope); 
            if (typeof op == "function") {
                return op(...args.map(arg => evaluate(arg, scope))); 
            } else {
                throw new TypeError("Applying a nonfunction"); 
            }
        }
    }

}

let myExpression = {
  type: 'apply',
  operator: { type: 'word', name: '+' },
  args: [ { type: 'word', name: 'a' }, { type: 'value', value: '10' } ]
}

let myExpression2 = {
  type: 'apply',
  operator: { type: 'word', name: 'if' },
  args: [ { type: 'word', name: 'condition' }, { type: 'value', value: '10' }, { type: 'value', value: '0'} ]
}


let myScope = {
    a: 10, 
    '+': (x,y) => x + y
}
// console.log(evaluate(myExpression, myScope)); 
// console.log(myExpression)


//adding to special forms
specialForms.if = (args, scope) => {
    if (args.length != 3) {
        throw new SyntaxError("Wrong number of args to if"); 
    } else if (evaluate(args[0], scope) !== false) {
        return evaluate(args[1], scope); 
    } else {
        return evaluate(args[2], scope); 
    }
}

// console.log(evaluate(myExpression2, {condition: true}))

specialForms.while = (args, scope) => {
    if (args.length != 2) {
        throw new SyntaxError("Wrong number of args to while"); 
    } 
    while (evaluate(args[0], scope) !== false) {
        evaluate(args[1], scope); 
    }
    return false; 
}


specialForms.do = (args, scope) => {
    let value = false; 
    for (let arg of args) {
        value = evaluate(arg, scope); 
    }
    return value; 
}

specialForms.define = (args, scope) => {
    if (args.length != 2 || args.length[0].type != "word") {
        throw new SyntaxError("Incorrect use of define"); 
    }
    let value = evaluate(args[1], scope); 
    scope[args[0].name] = value; 
    return value; 
}

const topScope = Object.create(null); 
topScope.true = true; 
topScope.false = false; 


let prog = parse(`if(true,false,true)`); 
console.log(evaluate(prog, topScope)); 