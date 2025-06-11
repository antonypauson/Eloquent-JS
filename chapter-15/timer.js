// let myTimer = setTimeout(() => {
//     console.log("BOOM"); 
// }, 500);

// if (Math.random() < 0.5) {
//     console.log("Defused")
//     clearTimeout(myTimer); 
// }

let ticks = 0;
let clock = setInterval(() => {
    console.log("tick", ticks++); 
    if (ticks == 10) {
        clearInterval(clock); 
        console.log("STOPPED")
    }
}, 200);  