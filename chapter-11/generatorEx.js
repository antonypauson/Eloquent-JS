function* power(n) {
    for (let i = n;;i *= n) {
        yield(i);
    }
}

for (let i of power(3)) {
    if (i > 50) {
        break;
    }
    console.log(i);
}