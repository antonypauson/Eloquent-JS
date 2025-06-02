//search() instead of indexOf()

// console.log("my number is 911".search(/\d+/));

//reminiscing indexOf()

//second argument of indexOf(), says look after that index
//for our element
console.log("banana".indexOf("a", 4));
//'a' comes at 5 after 4th index

let str = "banana";
let index = str.indexOf("a");
while (index != -1) {// -1 if not found
    console.log(index);
    index = str.indexOf("a", index + 1);
}