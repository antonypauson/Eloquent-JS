addEventListener("message", event => {
    const result = event.data * event.data;
    postMessage(result); 
})