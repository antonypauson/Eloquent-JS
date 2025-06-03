import * as weekNames from "./weekNames.js";
//importing every export as weekNames 

let now = new Date();

//weekNames.dayName()
let dayName = weekNames.dayName(now.getDay()).toString();
console.log(`Today is ${dayName}`);
//weekNames.dayNumber()
console.log(weekNames.dayNumber(dayName));