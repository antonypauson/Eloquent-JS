console.log(/\d+/.test("1"));

console.log(/\d+/.test(""));

console.log(/\d*/.test(""));
console.log("-------------");
let neigbhor = /neighbou?r/;

console.log(neigbhor.test("neighbour"));
console.log(neigbhor.test("neighbor"));
console.log(neigbhor.test("neighbouur"));

const dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));



