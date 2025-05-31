function test(label, body) {
    if (!body()) console.log(`Failed ${label}`);
}

test("convert English to upper", () => {
    return "hello".toUpperCase() == "HELL";
})

test("convert Greek to upper", () => {
    return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
})


function double(n) {
    return n * 2; 
}

test("double(2) gives", () => {
    return double(2) == 4; 
})

test("double(5) gives 10", () => {
    return double(5) == 11; 
})

