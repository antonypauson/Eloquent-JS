const countBy = require("../countBy.js");
const characterScript = require("../characterScript.js"); 
const SCRIPTS = require('../SCRIPTS.js'); 


console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));

function dominantDirection(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0)); 
        return script ? script.name : "none"; 
    }).filter(({name}) => name != "none"); 

    let dominantScript = scripts.reduce((a,b) => {
        return a.count < b.count ? b : a; 
    }).name; 

    return SCRIPTS.find(n => n.name == dominantScript).direction;
    
}
