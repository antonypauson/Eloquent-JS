let fifteen = Promise.resolve(15);
//already resolved Promise
//so works with then()
fifteen.then(value => console.log(`Got ${value}`));

let errorPromise = Promise.reject("Something went wrong");
//already rejected Promise
//so works with catch()
errorPromise.catch(error => console.log("Error:", error));


function readTextFile(fileName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fakeFiles = {
                "shopping.txt": "Milk\nEggs\nBread", 
                "todo.txt": "Wash car\nBuy groceries"
            }

            if (fakeFiles[fileName]) {
                resolve(fakeFiles[fileName])
            } else {
                reject("File not Found:" + fileName)
            }
        }, 5000)
    })
}

readTextFile("shopping.txt").then(content => {
    return content.split("\n"); 
}).then(items => {
    console.log("You need to buy:", items.join(","));
}).catch(error => {
    console.error("Oops", error)
}); 

let promise = new Promise((resolve, reject) => {
    //resolve it after 2s
    setTimeout(() => {
        resolve("Task finished");
    }, 2000)
});

promise.then(result => { //then() works
    console.log("Success: ", result)
}).catch(error => {
    console.log("Error: ", error); 
})


function textFile(filename) {
    return new Promise((resolve,reject) =>{
        readTextFile(filename, (text, error) => {
            if (error) reject(error); 
            else resolve(text); 
        } )
    })
}

textFile("plan.txt").then(console.log);

function randomFile(listFile) {
    return textFile(listFile)
    .then(content => content.trim().split("\n"))
    .then(ls => ls[Math.floor(Math.random() * ls.length)])
    .then(filename => textFile(filename));
}

function jsonFile(filename) {
    return textFile(filename).then(JSON.parse);
}

jsonFile("package.json").then(console.log);

someAsyncFunction((error, value) => {
    if (error) handleError(error); 
    else processValue(value); 
})

function someAsyncFunction(callback) {
    let success = Math.random * 1; 
    if (success) {
        callback(null,success); 
    } else {
        callback("Something went wrong", null);
    }
}
