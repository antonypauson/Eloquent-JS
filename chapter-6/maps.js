// Maps are better than objects, since they don't derive prototypes
// from higher Objects
// set, get, has
let ages = new Map(); //create a map

ages.set("Boris", 39); //set key-value
ages.set("Lia", 22);
ages.set("Julia", 62);

console.log(`Julia is ${ages.get("Julia")}`); //get value

console.log("Do we have Jack's age? ", ages.has("Jack")); //check if key exists
console.log("Do we have Lia's age? ", ages.has("Lia"));

console.log(ages.size); //length of map

ages.forEach((value,key) => {
    console.log(`${key} is ${value} years old`); //iterating. forEachil first (value, key) form aanu. Change in order
})


