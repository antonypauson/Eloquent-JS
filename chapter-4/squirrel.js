let journal = []; //this array 


function addEntry(events, squirrel) {
    journal.push({events, squirrel}); //push into array 
}

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false); //first events, second squirrel
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);

console.log(journal); //check out the output, 
//events, squirrel keys come automatically

function phi(table) {
    return(table[3] * table[0] - table[2] * table[1]) / 
   Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2])); 
}

console.log(phi([76,9,4,1]));
