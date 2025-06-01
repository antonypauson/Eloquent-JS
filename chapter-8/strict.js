function letsWorkWithStrict() {
    "use strict";
    for (counter = 0; counter < 10; counter++) {
        console.log("Keep working on this");
    }
}

function Person(name) {
    this.name = name; 
}

let ferdinand = new Person("Ferdinand");
console.log(ferdinand)