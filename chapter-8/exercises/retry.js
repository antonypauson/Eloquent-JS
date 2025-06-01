function primitiveMultiply(a,b) {
    if (Math.random() < 0.2) {
        return a * b 
    } 
    throw new MultiplicatorUnitFailure("Klunk");
}

class MultiplicatorUnitFailure extends Error{}

console.log(reliableMultiply(8,8));

function reliableMultiply(a,b) {
    for (;;) {
        try {
            let result = primitiveMultiply(a,b);
            return result
        } catch (e) {
            if (e instanceof MultiplicatorUnitFailure) {
                continue; 
            }
        }
    }
    
}