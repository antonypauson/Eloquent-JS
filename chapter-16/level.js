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
    constructor(plan) { //convert each row 
        let rows = plan.trim().split("\n").map(row => [...row]); 
        console.log(rows); 
        this.height = rows.length; 
        this.width = rows[0].length; 
        this.startActors = [];   //actors
        
        //difficult code upcoming
        this.rows = rows.map((row, y) => { //for each row, get x, y, 
            return row.map((ch, x) => { //find the type from LevelChars
                let type = levelChars[ch];  //if type is an actor, put that in startActors with its pos
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

// new Vec(x,y)
class Vec {
    constructor(x,y) {
        this.x = x; 
        this.y = y; 
    }

    plus(other) {
        let ansX = this.x + other.x; 
        let ansY = this.y + other.y;
        return new Vec(ansX, ansY); 
    }

    times(factor) {
        return new Vec(this.x * factor, 
            this.y * factor
        ); 
    }

}
const level = new Level(simpleLevelPlan); 
