class Dog {
    constructor(name) {
        this.name = name; 
    }

    speak() {
        return `${this.name} says Woof`; 
    }
}

class Cat {
    constructor(name) {
        this.name = name; 
    }

    speak() {
        return `${this.name} says Meow`
    }
}

const animals = {
    dog: Dog,
    cat: Cat
}

// console.log(animals['dog']); 

let myAnimalType = "dog"; 
let myPetName = "Jimmy"; 

let animalClass = animals[myAnimalType]; 

let myPet = new animalClass(myPetName);
console.log(myPet.speak()); 