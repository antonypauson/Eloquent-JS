class Rabbit { //class Rabit
    constructor(type) { //constructor
        this.type = type; 
    }

    speak(line) { //instance method
        console.log(`${this.type} rabbit says ${line}`); 
    }
}

Rabbit.prototype.teeth = "small"; 

let aRabbit = new Rabbit("normal"); 
console.log(aRabbit.type); 
console.log(aRabbit.teeth); 

aRabbit.teeth = "large"; 
aRabbit.type = "abnormal"; 
console.log(aRabbit.teeth); 
console.log(aRabbit.type); 

