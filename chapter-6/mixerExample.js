class Mixer {

    #speed = 0; 
    #isRunning = false; 

    #mixIngredients() {
        if (this.#isRunning) {
            console.log(`Mixing at ${this.#speed} speed`); 
        } else {
            console.log("Mixer is off"); 
        }
    }

    start() {
        this.#isRunning = true; 
        this.#speed = 1; 
        console.log(`Mixer started at ${this.#speed} speed`); 
    }

    setSpeed(speed) {
        if (speed < 0 || speed > 5) {
            console.log("Invalid speed. 0-5");
            return;  
        }
        this.#speed = speed;
        console.log(`Speed set to ${this.#speed}`);  
    }

    mix() {
        this.#mixIngredients(); 
    }

    stop() {
        this.#isRunning = false;
        this.#speed = 0; 
        console.log("Stopped mixer");  
    }

}

const myMixer = new Mixer();
myMixer.start();  
myMixer.setSpeed(3); 
myMixer.mix(); 
myMixer.stop();
 