let emptyObject = {}; 

// console.log(Object.getPrototypeOf(emptyObject) == Object.prototype);
// console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// console.log(Object.getPrototypeOf([]) == Array.prototype);

//objects can inherit properties from their prototype chain
// first checks if that object has property
// then checks that prototype's prototype



// Object.create() to create an object with specific prototype

let rabbit = { // ee prototype format ulla other rabbits
    speak(line) {
        console.log(`${this.type} rabbit says ${line}`); 
    }
}

let whiteRabbit = Object.create(rabbit); //creates a prototype 
whiteRabbit.type = "white"; 
whiteRabbit.speak("I've got to go");

let blackRabbit = Object.create(rabbit); //another
blackRabbit.type = "black"; 
blackRabbit.speak("Gotta go");  
