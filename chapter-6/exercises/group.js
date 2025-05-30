class Group {
    constructor() {
        this.members = []; 
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
let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));

group.add(10);
group.delete(10);
console.log(group.has(10));


