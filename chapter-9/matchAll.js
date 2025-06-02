let input = "A string with 3 numbers in it... 42 and 88.";

let matches = input.matchAll(/\d+/g);

for (let match of matches) {
    console.log("Found", match[0], "at", match.index);
}