loop(3, n => n > 0, n => n - 1, console.log);

function loop(value, test, update, body) {
    
    while (test(value)) {
        body(value); 
        value = update(value); 
    }
    
    return false; 
}