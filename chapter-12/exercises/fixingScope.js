import {specialForms, evaluate, run} from '../parserEvaluatorWithScope.js'; 

console.log(specialForms);

specialForms.set = (args, scope) => {
    if (args.length != 2 || args[0].type != word) {
        throw new SyntaxError("Error in syntax");
    }
    let setName = args[0].name; 
    let value = evaluate(arg[1], scope); 

    for (let eachScope = scope; eachScope; scope = Object.getPrototype(eachScope)) {
        if (Object.hasOwn(scope, setName)) {
            scope[setName] = value;
            return value;  
        }
    }
    throw new ReferenceError("Error ")
}; 

run(`
do(define(x, 4),
   define(setx, fun(val, set(x, val))),
   setx(50),
   print(x))
`);