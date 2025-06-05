function withTimeout(promise, time) {
    return new Promise((resolve, reject) => {
        promise.then(resolve, reject); 
        setTimeout(() => {
            reject("Timed out")
        }, time);
    })
}

const slowPromise = new Promise((resolve) => {
    setTimeout(() => resolve("Finished in time"), 1000); 
}); 

// withTimeout(slowPromise, 1000)
// .then(console.log)
// .catch(console.log("bang"))
