function buildGraph(anArray) {
    let graph = {};

    for (let [from, to] of anArray) {
        addEdge(from, to);
        addEdge(to, from);
    }

    function addEdge(from, to) {
        if (from in graph) {
            let inner = graph[from];
            inner[to] = 1; 
        } else {
            let emptyObj = graph[from] = {};
            emptyObj[to] = 1; 
        }
    }
    return graph; 
}

export default buildGraph;