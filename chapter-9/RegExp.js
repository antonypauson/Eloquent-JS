let name = "harry";
let regexp = new RegExp("(^|\\s)" + name + "($|\\s)", "gi");
console.log(regexp.test("Harry is from Hogwarts"));

let weirdName = "dea+hl[]rd";
let escapedWeirdName = weirdName.replace(/[\\[.+*?(){|^$]/g, "\\$&")
let newRegexp = new RegExp("(^|\\s)" + escapedWeirdName + "($|\\s)", "gi");

let text = "dea+hl[]rd is super annoying";
console.log(newRegexp.test(text));