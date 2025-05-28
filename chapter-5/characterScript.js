const SCRIPTS = require('./SCRIPTS.js'); 

console.log(characterScript(121)); //find script with range contains 121
console.log(characterScript2(121)); //find script with range contains 121

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => { 
            return code >= from && code < to; //code in that range -> true
        })) return script;                    //then return that script
    }
    return null; 
}


