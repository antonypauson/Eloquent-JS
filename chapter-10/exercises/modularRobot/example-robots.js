import {VillageState, runRobot} from "./state.js";
import roadGraph from "./road.js";
import dijkstra from "dijkstrajs";

const {find_path} = dijkstra; 

function findRoute(graph, from, to) {
    return find_path(graph, from, to);
}

// console.log(find_path(roadGraph, "Post Office", "Farm"));

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

runRobot(VillageState.random(), goalOrientedRobot, []); 


// console.log(roadGraph)
