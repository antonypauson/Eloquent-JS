//getter function have get keyword
//they can be used like normal properties without being called as functions
let user = { //normal object
    firstName: "Jane", 
    lastName: "Doe", 

    get getFullName() { //getter function
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(user.firstName); 
console.log(user.getFullName); //ingane vilikkaam, not function call 