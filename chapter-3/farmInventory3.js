printFarmInventory(7,11,3); 

function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroAtEnd(cows)} Cows`); 
    console.log(`${zeroAtEnd(chickens)} Chickens`); 
    console.log(`${zeroAtEnd(pigs)} Pigs`); 
}

function zeroAtEnd(number) {
    numberString = String(number); 

    while (numberString.length < 3) {
        numberString = "0" + numberString; 
    }

    return numberString; 
}