async function fileSizes(files) {
    let list = "";
    await Promise.all(files.map(async fileName => {
        list += fileName + ":" + 
        (await textFile(fileName)).length + "\n"; 
    }))
    return list; 
}

async function fileSize(files) {
    let lines = files.map(async fileName => {
        return fileName + ": " + 
        (await textFile(fileName)).length; 
    });
    return (await Promise.all(lines).join("\n"));
}


let list = "";

await Promise.all([
    (async () => { //async function
        await wait(100); //wait for 100
        list += "A\n"; //then only this
    })(), 
    (async () => {
        await wait(50); 
        list += "B\n"; 
    })()
]); 

function wait(time) {
    return new Promise(accept => setTimeout(accept, time)); 
}

console.log(list);