function canBark(state) {
    return {
        bark: () => console.log(`${state.name} barks!`)
    }
}

function canEat(state) {
    return {
        eat: () => console.log(`${state.name} eats`)
    }
}

function createDog(name) {
    const state = {name};
    return {
        ...canBark(state), 
        ...canEat(state)
    }
}

const score = [80,90,99];
score.map((each, i) => {
    console.log(`${each} at ${i+1} semester`);
})

let stopped = false; 
for (let i = 0; !stopped; i++) {
    if (i == 5) {
        stopped = true; 
    }
    console.log(i);
}


