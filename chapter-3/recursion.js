const power = (base, exponent) => {
    if (exponent == 0) {
        return 1; 
    } 

    return base * power(base, exponent - 1); 
}

console.log(power(2,3));
console.log("----------");

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history; 
        } else if (current > target) {
            return null; 
        } else {
            return find(current + 5, `(${history} + 5)`) ?? 
            find(current * 3, `(${history} * 3)`); 
        }
    }
    
    return find(1,"1"); 
}

console.log(findSolution(13));