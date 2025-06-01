const prompt = require('prompt-sync')();

const accounts = {
    a: 100, 
    b: 0, 
    c: 20
};

function getAccount() {
    let accountName = prompt("Enter an account name:");
    if (!Object.hasOwn(accounts, accountName)) {
        throw new Error (`No such account: ${accountName}`);
    }
    return accountName; 
}

function transfer(from, amount) {
    if (accounts[from] < amount) return;
    let progress = 0;
    try {
        accounts[from] -= amount; //already subtracted
        progress = 1; 
        accounts[getAccount()] += amount; //what if this throws exception? 
        progress = 2; 
    } finally {
        if (progress == 1) {
            accounts[from] += amount; 
        }
    }
} 

transfer('a', 50);
console.log(accounts);