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


