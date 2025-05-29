class List {
    constructor(value, rest) {
        this.value = value; 
        this.rest = rest; 
    }

    get length() {
        return 1 + (this.rest ? this.rest.length : 0); //rest undengil athinte length idukkukka, else 0. 
    }

    static fromArray(array) {
        let result = null; // last null
        for (let i = array.length - 1; i >= 0; i--) { //from reverse, keep adding 
            result = new this(array[i], result); 
        //  result = new List(array[i], result)
        //           new List(value,rest)
        }
        return result; 
    }

    [Symbol.iterator] = function() { //same thing for list
        return new ListIterator(this); //calls iterator class each time
    }
}
//inheritance
// List is super class
//LengthList is subclass
class LengthList extends List {

    #length; //private variable
    
    constructor(value, rest) {
        super(value, rest); //superclass constructor
        this.#length = super.length; //superclass property
    }

    get length() { //getter
        return this.#length; 
    }
}

console.log(LengthList.fromArray([1,2,3]).length); //calling length()