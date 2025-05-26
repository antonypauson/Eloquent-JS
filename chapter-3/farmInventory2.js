
printFarmInventory(7,11,3);

function printFarmInventory(cows, chickens, pigs) {
    printZeroAtEnd(cows, "Cows");
    printZeroAtEnd(chickens, "Chickens");
    printZeroAtEnd(pigs, "Pigs");
}

function printZeroAtEnd(number, label) {
    let numberString = String(number); 
    while (numberString.length < 3) {
        numberString = "0" + numberString; 
    }
    console.log(`${numberString} ${label}`); 
}