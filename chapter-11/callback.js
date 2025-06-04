setTimeout(() => {
    console.log("Let us do this")    
}, 1000);


readTextFile(fileName, content => {
    console.log(`Shopping List:\n${content}`); 
});

function compareFiles(fileA, fileB, callback) {
    readTextFile(fileA, contentA => {
        readTextFile(fileB, contentB => {
            callback(contentA == contentB);
        })
    })
}