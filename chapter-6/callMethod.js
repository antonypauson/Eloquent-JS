// call() method
// first arg -> this
// remaining -> method parameters

const person1 = {
    name: "Alice", 
    place: "Wonderland",

}

const person2 = {
    name: "Tony", 
    place: "USA"
}

function sayThis(line) {
    console.log(`${this.name} says ${line}`)
}

sayThis.call(person1, " Come with me"); 



