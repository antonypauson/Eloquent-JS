//Math.random() * num generated random number between 0 and num
// eg Math.random() * 8, 0-8, higher than 0, lower than 8 in floating
// Math.floor() takes the smaller value
// 0.1 => 0
// 7.9 => 7
// Hence, Math.floor(Math.random() * 8) => 0 to 7
let randomNum = Math.floor(Math.random() * 5); // 0 to 4; 

console.log(randomNum);