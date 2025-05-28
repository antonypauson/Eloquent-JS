const SCRIPTS = require('./SCRIPTS.js'); 


function average(array) {
    return array.reduce((a,b) => a + b) / array.length; 
}

console.log(Math.round(average(
    SCRIPTS.filter(s => s.living) //filter out living scripts
    .map(s => s.year)             //take out their year only
)));                              //compute average

console.log(Math.round(average(
    SCRIPTS.filter(s => !s.living) //filter out not living
    .map(s => s.year)              //take our their year only
)))                                 //compute average

//long approach
let total = 0, count = 0; 
for (let each of SCRIPTS) {
    if (each.living) {
        total += each.year; 
        count += 1; 
    }
}

console.log(Math.round(total / count)); 