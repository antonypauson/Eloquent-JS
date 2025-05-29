// getter : treats function as property, a value return
// setter : treats function as property, set a value as param

let obj = {
    _value: 0, // _value property

    get value() {
        return this._value; // getter
    }, 

    set value(val) {
        this._value = val; // setter
    }

}

// console.log(obj.value); //getter value()
obj.value = 100; //setter value(val) function call
// console.log(obj.value); //getter value function

//getters + setters in class
class Temperature {
    constructor(celsius) {
        this.celsius = celsius; 
    }

    get fahrenheit() {
        return this.celsius * 1.8 + 32; 
    }

    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8; //converting to celsius
    }

    static fromFahrenhit(value) {
        return new Temperature((value - 32) / 1.8); 
    }

}

let temp = new Temperature(22); //constructor
console.log(temp.fahrenheit); //getter
temp.fahrenheit = 86; //setter
console.log(temp.celsius); //property this.celsius
let boil = Temperature.fromFahrenhit(212);
console.log(boil.celsius); 