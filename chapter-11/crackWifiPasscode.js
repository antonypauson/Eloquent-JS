function withTimeout(promise, time) {
    return new Promise((resolve, reject) => {
        promise.then(resolve, reject); 
        setTimeout(() => reject("Timed out"), time);
    })
}

