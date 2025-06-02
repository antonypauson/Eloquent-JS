console.log(/\d+ (pig|chicken|cow)s?/.exec("1 pig"));
console.log(/\d+ (pig|chicken|cow)s?/.exec("1000 chickens"));

console.log(/cat|dog/.exec("I have a cat"));
console.log(/cat|dog/.exec("I have a chicken"));

console.log(/a(b|c)d/.exec("abc"));
console.log(/a(b|c)d/.exec("abd"));

console.log(/^https?|ftp/.exec("http:x.com"));
console.log(/^https?|ftp/.exec("ftp.com"));
