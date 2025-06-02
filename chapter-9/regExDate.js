let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
console.log(/\d\d:\d\d/.test("15:20"));

console.log(/[\d.]/.test("."));
console.log(/[\d.]/.test(""));
console.log("**************")
console.log(/[^01]/.test("99"));
console.log(/[^01]/.test("02"));
console.log(/[^01]/.test("1"));

