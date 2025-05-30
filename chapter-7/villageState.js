const roadGraph = require('./meadowfield.js');

class VillageState {
    constructor(place, parcels) {
        this.place = place; 
        this.parcels = parcels; 
    }

    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this; 
        } else {
            let parcels = this.parcels.map(each => {
                if (each.place != this.place) return each; 
                return {place: destination, address: each.address};
            }).filter(p => p.place != p.address); 
            return new VillageState(destination, parcels); 
        }
    }
}

let first = new VillageState(
    "Post Office", 
    [{place: "Post Office", address: "Alice's House"}]
); 
let next = first.move("Alice's House");
console.log(next); 
