const roadGraph = require('./meadowfield.js');
// console.log(roadGraph);
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

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length); 
    return array[choice]; 
}

VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place; 
        do {
            place = randomPick(Object.keys(roadGraph)); 
        } while (place == address); 
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels); 
}

let postOfficeState = VillageState.random();
console.log(postOfficeState);

function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])}
}

 function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`); 
            break; 
        }
        let action = robot(state, memory); 
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`); 
        }
}


// let first = new VillageState(
//     "Post Office", 
//     [{place: "Post Office", address: "Alice's House"}]
// ); 
// let next = first.move("Alice's House");
// console.log(next); 
