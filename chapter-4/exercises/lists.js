let list = {
    value: 1 ,
    rest: {
        value: 2,
        rest: {
            value: 3, 
            rest: null
        }
    }
};


console.log(arrayToList([10,20])); 
console.log(listToArray(arrayToList([10,20,30])));

function listToArray(list) {
    let myArr = []; 
    for (let node = list; node; node = node.rest) {
        myArr.push(node.value); 
    }
    return myArr;
}

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    } 
    return list; 
}

