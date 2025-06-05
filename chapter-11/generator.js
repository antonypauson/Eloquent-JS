function* myGenerator() {
    yield 1; 
    yield 2; 
    yield 3; 
}

const gen = myGenerator();
console.log(gen.next()); 

function* counter() {
    yield 1;
    yield 2; 
    yield 3;  
}


for (let value of counter()) {
    console.log(value);
}