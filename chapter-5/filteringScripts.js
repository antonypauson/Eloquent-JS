const SCRIPTS = require('./SCRIPTS.js'); 




console.log(filter(SCRIPTS, script => script.living));

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