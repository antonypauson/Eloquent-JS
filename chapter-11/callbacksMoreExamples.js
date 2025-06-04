function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback(name);//calling callback
}

//callback function
greet("Antony", name => {
    console.log(`Yo ${name}`);
})

//async example
setTimeout(() => {
    console.log("Run this after 2 seconds")
}, 2000);