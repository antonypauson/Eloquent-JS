let match = /\d+/.exec("one two 100");
console.log(match);

console.log("one two 100".match(/\d+/));

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello' 'bye'"))
console.log("**********************");
console.log(/bad(ly)?/.exec("bad"));
console.log(/(\d)+/.exec("123"));
console.log(/(?:na)+/.exec("banana"));