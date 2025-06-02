console.log("love".replace("l", "d"));
console.log("my favorite friend is someone called favoritey".replace(/favorite/g, "best"));

console.log("Borobudur".replace(/[ou]/g, "a"));

console.log("********")
//replace all digits with #
console.log("My phone number is 123456".replace(/\d/g, "#"))

//sensor f word
console.log("What in the fucking hell is this fuck".replace(/fuck/g, "f***"));

//swap words
console.log("John Smith".replace(/(\w+) (\w+)/, "Last Name:$2 First Name:$1"));

//given example in Eloquent
console.log(
    "Liskov, Barbara\nMcCarthy, John\nMilner, Robin"
    .replace(/(\w+), (\w+)/g, "$2 $1")
)

console.log("1 lemon, 2 cabbages, and 101 eggs".
    replace(/(\d+) (\w+)/, minusOne)
)

function minusOne(match, amount, unit) {
    amount = Number(amount) - 1; 
    if (amount == 1) {
        unit = unit.slice(0, unit.length - 1);
    }
    if (amount == 0) {
        amount = "no";
    }
    return amount + " " + unit;
}

function stripComments(code) {
    return code.replace(/\/\/[^]*|\/\*[^]*?\*\//g, "");
}

console.log(stripComments("this is a program //this is a comment"));
console.log(stripComments("hey /* saying hey */ heyhey /* saying heyhey */"));