let simpleLevelPlan = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`;

// . empty space
// # walls
// @ starting position
// + lava
// = lava horizontal
// | lava vertical
// v lava dripping

console.log(simpleLevelPlan); 

const levelChars = {
    ".": "empty", 
    "#": "wall", 
    "+": "lava"
}
export default levelChars; 