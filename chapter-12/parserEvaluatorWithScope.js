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
            return specialForms[operator.name](args, scope); 
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


let myScope = {
    a: 10, 
    '+': (x,y) => x + y
}
console.log(evaluate(myExpression, myScope)); 