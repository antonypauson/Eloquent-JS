const SCRIPTS = require('./SCRIPTS.js'); 

console.log(filter(SCRIPTS, script => script.living)); //returns script.living

function filter(script, test) {
    let passed = []; 
    for (let each of script) {
        if(test(each)) {
            passed.push(each); 
        }
    }
    return passed; 
} 

console.log("----------"); 

console.log(SCRIPTS.filter(each => each.living));
console.log(SCRIPTS.filter(each => each.name == "Malayalam"));  