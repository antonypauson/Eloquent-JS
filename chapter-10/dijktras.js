//import as default 'cause this is a CommonJS module
import dijkstra from "dijkstrajs";
//function from that module
const {find_path} = dijkstra; 

// const graph = {
//     A: {B: 1, D: 4}, 
//     B: {A: 1, C: 2, D: 5},
//     C: {A: 4, B: 2, D: 1}
// }

// console.log(find_path(graph, "A", "C"));

//we have to convert 'roadGraph' into a 'graph' style for dijkstras
//oroo placeleekum 1 distance aanu ullath
const roadGraph = {
  "Alice's House": [ "Bob's House", 'Cabin', 'Post Office' ],
  "Bob's House": [ "Alice's House", 'Town Hall' ],
  Cabin: [ "Alice's House" ],
  'Post Office': [ "Alice's House", 'Marketplace' ],
  'Town Hall': [ "Bob's House", "Daria's House", 'Marketplace', 'Shop' ],
  "Daria's House": [ "Ernie's House", 'Town Hall' ],
  "Ernie's House": [ "Daria's House", "Grete's House" ],
  "Grete's House": [ "Ernie's House", 'Farm', 'Shop' ],
  Farm: [ "Grete's House", 'Marketplace' ],
  Shop: [ "Grete's House", 'Marketplace', 'Town Hall' ],
  Marketplace: [ 'Farm', 'Post Office', 'Shop', 'Town Hall' ]
}


let graph = {};//last output
for (let eachKey of Object.keys(roadGraph)) { //each key
    let eachNode = graph[eachKey] = {}; //initialize each key to empty object
    for (let eachDestination of roadGraph[eachKey]) { //iterate through array of each keys
        eachNode[eachDestination] = 1; //put those array into inner loop  
    }
} 

console.log(graph);

//finding shortest distance using dijktra
console.log(find_path(graph, "Post Office", "Cabin"));
console.log(find_path(graph, "Post Office", "Farm"));


