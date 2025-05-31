const roadGraph = require('../meadowfield.js');
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

// let postOfficeState = VillageState.random();
// console.log(postOfficeState);

function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])}
}

const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
]; 

function routeRobot(state, memory) {
    if (memory.length == 0) {
        memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};  
}

function findRoute(graph, from, to) {
    let work = [ {at: from, route: []} ];

    for (let i = 0; i < work.length; i++) {
        let {at, route} = work[i];

        for (let place of graph[at]) {
            if (place == to) return route.concat(place);

            if (!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}

 function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            // console.log(`Done in ${turn} turns`); 
            return turn; 
        }
        let action = robot(state, memory); 
        state = state.move(action.direction);
        memory = action.memory;
        // console.log(`Moved to ${action.direction}`); 
        }
}

function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}

// runRobot(VillageState.random(), goalOrientedRobot, []); 
const average = steps => steps / 100; 

function compareRobots(robot1, memory1, robot2, memory2) {
    // let randomTask = VillageState.random(1);
    // let robot1Steps = runRobotSteps(randomTask, robot1 ,memory1);
    // let robot2Steps = runRobotSteps(randomTask, robot2 ,memory2);
    let robot1Steps = 0, robot2Steps = 0;

    for (let i = 0; i < 100; i++) {
        let randomState = VillageState.random(1);
        robot1Steps += runRobot(randomState, robot1, memory1);
        robot2Steps += runRobot(randomState, robot2, memory2);
    }
    console.log(`Robot 1 takes ${average(robot1Steps)} steps in average
Robot 2 takes ${average(robot2Steps)} steps in average`);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);


