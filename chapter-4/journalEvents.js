const JOURNAL = require("./journal.js"); 


//function retuns an array of unique event names
function journalEvents(journal) {
    let events = []; 
    for (let eachEntry of journal) {
        for (let eachEvent of eachEntry.events) {
            if (!events.includes(eachEvent)) events.push(eachEvent);
        } 
    }
    return events;
}

//finds phi correlation
//input: [*,*,*,*] array
function phi(table) {
    return(table[3] * table[0] - table[2] * table[1]) / 
   Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2])); 
}

//retuns a table 
function tableFor(event, journal) {
    let table = [0,0,0,0];

    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0; 

        if (entry.events.includes(event)) index += 1; 
        if (entry.squirrel) index += 2;
        table[index] += 1;  
    }
    return table; 
}


for (let entry of journalEvents(JOURNAL)) { //through each event
    let value = phi(tableFor(entry, JOURNAL));
    if (value > 0.1 || value < -0.1) {
        console.log(`${entry} -> ${value}`); 
    }
}

for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") &&
            !entry.events.includes("brushed teeth")) {
                entry.events.push("peanut teeth"); 
            }
}

console.log(phi(tableFor("peanut teeth", JOURNAL))); 