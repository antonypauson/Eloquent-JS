import parse from '../parser.js'; 
import * as imports from "../parserEvaluatorWithScope.js"; 

console.log(imports.topScope); 

imports.topScope.array = (...values) => values; 
imports.topScope.length = array => array.length; 
imports.topScope.element = (array, i) => array[i]; 

imports.run(`
do(define(sum, fun(array,
     do(define(i, 0),
        define(sum, 0),
        while(<(i, length(array)),
          do(define(sum, +(sum, element(array, i))),
             define(i, +(i, 1)))),
        sum))),
   print(sum(array(1, 2, 3))))
`);