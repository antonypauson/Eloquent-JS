let reg1 = /abc\+/;
let reg2 = new RegExp("abc");

console.log(reg1.test("abcabc"));
console.log(reg2.test("aaabc"));
