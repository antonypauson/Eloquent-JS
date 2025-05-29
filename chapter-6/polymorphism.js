class Rabbit { //class Rabit
    constructor(type) { //constructor
        this.type = type; 
    }

    speak(line) { //instance method
        console.log(`${this.type} rabbit says ${line}`); 
    }
}

Rabbit.prototype.toString = function()  {
    console.log(`a ${this.type} rabbit`); 
}

let killerRabbit = new Rabbit("killer"); 
String(killerRabbit); 