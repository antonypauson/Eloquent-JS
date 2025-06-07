let body = document.body;

// console.log(body.childNodes[0]);

// console.log(body.children[0]);
// console.log(body.children[1]);
// console.log(body.children[2]);
// console.log("*******")

function talksAbout(node, string) {
    if (node.nodeType == Node.ELEMENT_NODE) {
        for (let child of node.childNodes) {
            if (talksAbout(child, string)) {
                return true; 
            }
        }
        return false; 
    } else if (node.nodeType == Node.TEXT_NODE) {
        return node.nodeValue.indexOf(string) > -1; 
    }
}

console.log(talksAbout(body, "book"));


console.log(body.childNodes[5].childNodes[0].nodeValue)
