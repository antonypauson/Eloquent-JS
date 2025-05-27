let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};

//accessing
console.log(car["year"]);
console.log(car.year);

car["special-key"] = true; //adding new prop

console.log("--------------------");

let person = {
    name: "Alice", 
    greet: function name() {
        return "Hello " + this.name; 
    }, 
    marks: [10,20,30]
}; 

console.log(person.greet());
console.log(person.marks[1]); 

console.log("--------------------");
console.log(Object.keys(car)); 

for (let key in car) {
    console.log(`${key} -> ${car[key]}`);
}

console.log("--------------------");
function createUser({name, age}) {
    return `User ${name} with age ${age}`; 
}

console.log(createUser({name: "Alice", age: 15})); 

console.log("--------------------");
for (let entry of Object.keys(car)) {
    console.log(entry + " - >" + car[entry]); 
}
