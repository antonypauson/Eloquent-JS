const countBy = require("./countBy.js");
const characterScript = require("./characterScript.js"); 
//console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));

function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0)); 
        return script ? script.name: "none"; 
    }).filter(({name}) => name != "none"); 
    
    let total = scripts.reduce((n, {count}) => n + count, 0); 
    if (total == 0) return "No scripts found"; 

    return scripts.map(({name, count}) => {
        return `${Math.round(count * 100 / total)}% ${name}`; 
    }).join(", "); 
}


