onmessage = (e) => {
    console.log("Worker: Message recieved from main")

    const result = e.data[0] * e.data[1]; 

    const actResult = "Result: " + result; 

    console.log("Worker: Posting message back to main")
    postMessage(actResult); 
}