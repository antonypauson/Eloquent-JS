let fifteen = Promise.resolve(15);
//already resolved Promise
//so works with then()
fifteen.then(value => console.log(`Got ${value}`));

let errorPromise = Promise.reject("Something went wrong");
//already rejected Promise
//so works with catch()
errorPromise.catch(error => console.log("Error:", error));

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
