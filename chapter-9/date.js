console.log(new Date());

console.log(new Date(2009, 11, 9));

console.log(new Date(2009, 11, 9, 12, 59, 59, 999));

console.log(new Date(2013, 11, 19).getTime());

console.log(new Date(1387391400000));

console.log(getDate("1-30-2003"));

function getDate(string) {
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
}

console.log(/(\d{1,2})-(\d{1,2})-(\d{4})/.exec("100-1-30"));


//^ starts with that
//$ ends with that
console.log("^^^^^^^^^^^^^")
console.log(/^abc/.test("abcwowowow"));
console.log(/^abc/.test("bangabc"));
console.log(/(abc)+/.test("bangabc"));
console.log(/abc/.test("bangabc"));
console.log("$$$$$$$$$$$$$$")
console.log(/abc$/.test("bangabc"));
console.log(/abc$/.test("abcwowowo"));
console.log("^$^$^$^^$^$^$^^$^$^$^")
console.log(/^\d+$/.test("1banb12"));
console.log(/^\d.*\d$/.test("1banby12"));


