//private properties start with #
//only accessible to that class
class Person {
    #secretName; //private property

    constructor(name, secretName) {
        this.name = name; 
        this.#secretName = secretName; //assigning 
    }

    #whisper() { //private method
        console.log(`My secret name is ${this.#secretName}`)
    }

    revealSecret() { //public method, will work now
        this.#whisper(); //calling private method
    }
}

// let me = new Person("Kanye West","yeezy");
// console.log(me.name); //public property
// // console.log(me.#secretName);  //won't work
// me.revealSecret(); 

class SecretObject {
    #getSecret() {
        return "I ate all the plums"; 
    }

    interrogate() {
        let shallISayIt = this.#getSecret();
        return "never";  
    }
}

let secretObj = new SecretObject();
console.log(secretObj.interrogate()); 


class RandomSource {
    #max;
    
    constructor(max) {
        this.#max = max; 
    }

    getNumber() {
        return Math.floor(Math.random() * this.#max); 
    }
}

let rand = new RandomSource(3); 
console.log(rand.getNumber()); 