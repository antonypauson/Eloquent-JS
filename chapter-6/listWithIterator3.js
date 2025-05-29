//NumberRange enna class
class NumberRange {
    constructor(start, end) {
        this.start = start;
        this.end = end; 
    }

    [Symbol.iterator]() { //makes our NumberRange iterable
        return new NumberIterator(this.start, this.end); 
        //for each iteration, this function gets called
    }
}

class NumberIterator { //iteration class
    constructor(start, end) {
        this.start = start; 
        this.end = end; 
    }

    next() { //next should return {value: , done: }
        if (this.start > this.end) {
            return {done: true};//when start is bigger than end, done
        }

        let value = this.start; //value is current start 
        this.start++; //increment it
        return {value, done: false}; //return done as false 
    }
}

let range = new NumberRange(1,3);
for (let each of range) {
    console.log(each); 
} 