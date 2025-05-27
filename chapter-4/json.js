let string = {
    squirrel: false, 
    events: ["weekend", "bang", "yeeah"]
}
console.log(JSON.stringify(string)); //converts to JSON 

let json = {
    "squirrel": false, 
    "events": ["weekend", "bang"]
}
console.log(JSON.parse(JSON.stringify(json))); //back to string 