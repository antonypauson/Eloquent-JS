class Rabit { //class Rabit
    constructor(type) { //constructor
        this.type = type; 
    }

    speak(line) { //instance method
        console.log(`${this.type} rabbit says ${line}`); 
    }
}

let killerRabbit = new Rabit("killer"); //creating object
// killerRabbit.speak("Bang bang") //calling function

let object = new class { //class created directed into objects
    getWord() {
        console.log("Hello "); 
    }

     speed = 0; //class variables don't need let,const or var
}

object.getWord();  
console.log(object.speed); 