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

class Level {
    constructor(plan) {
        let rows = plan.trim().split("\n").map(row => [...row]); 
        console.log(rows); 
        this.height = rows.length; 
        this.width = rows[0].length; 
        this.startActors = [];  
        
        //difficult code upcoming
        this.rows = rows.map((row, y) => {
            return row.map((ch, x) => {
                let type = levelChars[ch]; 
                if (typeof type != "string") {
                    let pos = new Vec(x,y); 
                    this.startActors.push(type.create(pos, ch)); 
                    type = "empty"; 
                }
                return type; 
            })
        })
    }
}

const level = new Level(simpleLevelPlan); 
