function validateAge(age) { //handling age
    if (typeof age !== "number") {
        throw new Error("Age must be a number"); //throws error
    }

    if (age < 0 || age > 100) { //throws error
        throw new Error("Age should be between 0 and 100");
    }

    return age; //just return without error
}

function processUserAge(input) { //only calls validateAge(age)
    try {
        let age = validateAge(input);
        console.log(`You are ${age} years old`);
    } catch (error) {
        console.log("Error", error);
    }
}

processUserAge(9);
processUserAge("hey");
processUserAge(null);
processUserAge(200);