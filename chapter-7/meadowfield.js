const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin", //each element is from-to pair
  "Alice's House-Post Office",   "Bob's House-Town Hall",//so we will have to use split("-") for each element ==> map()
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges) {
    let graph = Object.create(null); //create an emtpy object with no prototype
    
    for (let [from, to] of edges.map(r => r.split("-"))) { //each element
        addEdge(from, to); //call addEdge(from, to)
        addEdge(to, from); //also (to, from), bidirectional
    }

    function addEdge(from, to) {
        if (from in graph) {
            graph[from].push(to); //already from indengil, push 'to' to that arrray
        } else {
            graph[from] = [to]; //illengil, just add 'to'
        }
    }

    return graph; 
}
const roadGraph = buildGraph(roads); 
console.log(roadGraph);