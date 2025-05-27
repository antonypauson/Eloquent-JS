//obj?.prop -> safely call property without crash
//obj?.[prop] -> same 
//obj.method?.() -> safely call methods

function city(object) {
    return object.address?.city; 
}

console.log(city({address: {city: "Toronto"}})); //returns
console.log(city({name: "Vera"})); //undefined