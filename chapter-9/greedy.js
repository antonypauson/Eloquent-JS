let str = "<b>bold</b><i>italic</i>";

// console.log(/<.*<\/./.exec(str)); //greedy

// console.log(/<.*?<\/./.exec(str)); //non greedy

let str2 = `"hello" and "world"`;

// console.log(/".*"/.exec(str2));

// console.log(/".*?"/.exec(str2));

let str3 = "<div>Some <b>bold</b> text</div>";

console.log(str3.replace(/<.*>/g, ""));

console.log(str3.replace(/<.*?>/g, ""));

