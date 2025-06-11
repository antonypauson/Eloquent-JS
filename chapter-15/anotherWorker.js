addEventListener("message", event => { //getting data
    const result = event.data * event.data;
    postMessage(result);  //sending data 
})