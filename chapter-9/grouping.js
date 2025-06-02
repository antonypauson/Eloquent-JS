let booing = /boo+(hoo+)+/i;

console.log(booing.test("boohoohoohoo"));
console.log(booing.test("booooooooooohooooohoo"));
console.log(booing.test("boobooshooooboohoooohooooohooohoooboo"))