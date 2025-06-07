const specialForms = Object.create(null); 

function evaluate(expression, scope) {
    if (expression.type == "value") {
        return expression.value; 
    } else if (expression.type == "word") {
        return scope[expression.name]; 
    } else {
        throw new ReferenceError(`Undefined binding: ${expression.name}`); 
    }
}

let myExpression = {
    type: 'word', 
    name: 'a'
}

let myScope = {
    b: 20
}
console.log(evaluate(myExpression, myScope)); 