// Fill in the regular expressions

verify(/(\w+)\s(c\w+)/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/(\w+)\s(\w+)/,
       ["pop culture", "mad props"],
       ["plop", "prrrop"]);

verify(/ferr[eya]\w*/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/(\w+)\s(\w+)/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\.$/,
       ["bad punctuation ."],
       ["escape the period"]);

verify(/\w{10,}/,
       ["Siebentausenddreihundertzweiundzwanzig"],
       ["no", "three small words"]);

verify(/^(red|wobbling)/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "bedrøvet abe", "BEET"]);


function verify(regExp, yes, no) {
    if (regExp.source == "...") return; 
    
    for (let str of yes) {
        if (!regExp.test(str)) {
            console.log(`Failure to match ${str}`);
        }
    }

    for (let str of no) {
        if (regExp.test(str)) {
            console.log(`Unexpected match for ${str}`);
        }
    }
}

