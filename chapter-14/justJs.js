// let arrayish = {0: "one", 1: "two", length:2};
// let array = Array.from(arrayish);
// console.log(array.map(s => s.toUpperCase()));

function aFun(first, ...children) {
    console.log(children);
}

aFun("a", "a", "b", "c", "d", "d")