let changeVal = true; 

let width = 4; 
let length = 8; 

while (length > 0) {
    printHash(changeVal, width); 
    changeVal = !changeVal;
    length--; 
}

function printHash(changeVal, width) {
    let output = ""; 
    
    if (!changeVal) {
        while (width > 0) {
        output += "# "; 
        width--; 
        }
    }

    if (changeVal) {
        while (width > 0) {
        output += " #";
        width--;  
        }
    }

    console.log(output);
}