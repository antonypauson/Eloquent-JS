class ListIterator {
    constructor(list) {
        this.list = list; 
    }

    next() {
        if (this.list == null) {
            return {done: true}; 
        }
        let value = this.list.value; 
        this.list = this.list.rest; 
        return {value, done: false}; 
    }
}

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

    [Symbol.iterator] = function() {
        return new ListIterator(this); 
    }
}

let list = List.fromArray([1,2,3]); 
for (let each of list) {
    console.log(each); 
}



