function speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`); 
}

//speak.call({type: "happy"}, "I am happy");
//.call() lets you give this as first argument
//second arg -> function parameter

let whiteRabbit = {type: "white", speak}; 
let hungryRabbit = {type: "hungry", speak}; 

//hungryRabbit.speak("Got any carrots"); 
//whiteRabbit.speak("Oh my fur and whisters"); 

let myCar = { //object myCar
    brand: "Toyota", 
    color: "red", 
    describe //describe method of 'this'
}
let yourCar = { //object yourCar
    brand: "Tata", 
    color: "yellow", 
    describe //describe method of 'this'
}

function describe() { //describe method
    console.log(`${this.color} car is a ${this.brand}`); 
}

//myCar.describe(); 
// yourCar.describe(); 
// describe.call({color: "black", brand: "Mercedes"});

let finder = { //an object called finger
    find(array) { //an object method called find
        return array.some(v => v == this.value); //arrow functionil 'this' represents to outer 'this', so here 'this' is for find(array) function
    }, 
    value: 5 //this.value
}
console.log(finder.find([4,5])); 


let person = {
    name: "Alice", 
    hobbies: ["reading", "cycling", "coding"], 
    printHobbies() {
        this.hobbies.forEach(hobby => { //arrow function's 'this' is outer this. So its person object
            console.log(`${this.name} likes ${hobby}`)
        });
    }
}

person.printHobbies();



