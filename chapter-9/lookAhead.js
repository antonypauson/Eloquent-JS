console.log(/\d(?=px)/.exec("5px"));
console.log(/\d(?=px)/.exec("5"));


console.log(/wow(?=!)/i.exec("I said WOW!"));

console.log(/\d(?!px)/.exec("5cm"));
console.log(/\d(?!px)/.exec("5px"));

console.log(/a(?=e)/.exec("braeburn"));
console.log(/a(?! )/.exec("ab"));