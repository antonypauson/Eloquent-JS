const SCRIPTS = require('./SCRIPTS.js'); 

console.log(SCRIPTS.reduce((a,b) => {
    return characterCount(a) < characterCount(b) ? b : a; 
}))

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from); 
    }, 0); 
} 


