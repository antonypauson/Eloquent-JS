//shift -> remove from front
//unshift -> add to front
let myArr = [1,2,3]; 
myArr.shift(); //removes 1
myArr.unshift(100); //add 100 at the front

console.log(myArr); 

console.log(myArr.indexOf(2)); 

myArr = [1,2,3,2,1]; 
console.log(myArr.indexOf(2)); //index from front 
console.log(myArr.lastIndexOf(2)); //index from end


function remove(array, index) {
    return array.slice(0,index). //0 to excluding index
    concat(array.slice(index+1)); //index+1 to end
}

console.log(remove(["a", "b", "c", "d", "e"],2)); //removes c at index 2


