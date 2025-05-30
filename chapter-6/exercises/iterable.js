class GroupIterator {
    constructor(group) {
        this.members = group.members;
        this.index = 0;  
    }


    next() {
        if (this.index >= this.members.length) {
            return {done: true}; 
        }
        let value = this.members[this.index];
        this.index++;  
        return {value, done: false}; 
    }
}
class Group {
    constructor() {
        this.members = []; 
    }

    [Symbol.iterator]() {
        return new GroupIterator(this); 
    }

    add(value) {
        if (!this.members.includes(value)) {
            this.members.push(value); 
        }
    }

    delete(value) {
        if (this.members.includes(value)) {
            this.members = this.members.filter(each => 
                each != value
            )
        }
    }

    has(value) {
        if (this.members.indexOf(value) >= 0) return true;
        return false; 
    }
    
    static from(array) { //this is static method
        let myArray = [...array];
        let group = new Group() //since we are creating an object in itself
        for (let each of myArray) {
            group.add(each); //using object property
        } 
        return group; 
    }
}

for (let each of Group.from(["a", "b", "c"])) {
    console.log(each);
}