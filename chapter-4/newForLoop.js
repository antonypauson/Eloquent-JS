const JOURNAL = require('./journal.js');

//for of loop for iterating through array
for (let eachEntry of JOURNAL) {
    console.log(`${eachEntry.events[0]} events`); 
}

for (let eachEntry of JOURNAL) {
    console.log(eachEntry); 
}