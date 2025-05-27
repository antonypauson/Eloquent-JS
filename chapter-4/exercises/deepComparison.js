
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));


function deepEqual(obj1, obj2) {
    if (Object.keys(obj1).length != Object.keys(obj2).length) return false; 

    for (let key of Object.keys(obj1)) {
        const val1 = obj1[key]; 
        const val2 = obj2[key]; 
        //randum objects aano
        const areObjects = isObject(val1) && isObject(val2); 

        if (
            //nested objects -> recursion
            areObjects && !deepEqual(val1, val2) ||
            //not objects, straight comparison
            !areObjects && val1 !== val2 ){
                return false; 
            }
    }
    return true;
}

function isObject(object) {
    return object != null && typeof object == 'object'; 
}