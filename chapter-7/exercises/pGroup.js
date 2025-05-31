class Group {
    constructor(members) {
        this.members = members; 
    }

    add(value) {
        if (this.members.includes(value)) return this; 
        return new Group(this.members.concat(value)); 
    }

    delete(value) {
        if (this.has(value)) {
            return new Group(this.members.filter(each => each != value)); 
        }
        return this; 
    }

    has(value) {
        return this.members.includes(value); 
    }
    
   
    static empty = new Group([]);

}

let a = Group.empty.add("a");
console.log(a);
let ab = a.add("b");
console.log(ab);
let b = ab.delete("a");

console.log(b.has("b")); 
console.log(a.has("b")); 
console.log(b.has("a"));

