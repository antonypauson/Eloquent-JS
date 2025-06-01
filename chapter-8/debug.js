console.log(numberToString(13));

function numberToString(n) {
    let base = 10; 
    let result = "", sign = "";
    if (n < 0) {
        sign = "-";
        n = -n;
    }

    do {
        result = String(n % base) + result;
        // console.log(n);
        n /= base;  
    } while (Math.floor(n) > 0);

    return sign + result; 
}