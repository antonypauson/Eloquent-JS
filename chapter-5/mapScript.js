const SCRIPTS = require('./SCRIPTS.js'); 
//generate names of script array

console.log(map(SCRIPTS, script => script.name));

function map(script, transform) {
    let passed = []; 

    for (each of script) {
        passed.push(transform(each)); 
    }
    return passed; 
}
console.log("----------");

//default map
console.log(SCRIPTS.map(each => each.name)); 
console.log(SCRIPTS.map(each => each.year)); 
