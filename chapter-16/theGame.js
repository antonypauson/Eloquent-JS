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


class State {
    constructor(level, actors, status) {
        this.level = level; 
        this.actors = actors;
        this.status = status;  
    }

    static start(level) {
        return new State(level, level.startActors, "playing"); 
    }

    get player() {
        return this.actors.find(a => a.type == "player"); 
    }
}


class Lava {//track pos, speed and reset for dripping lava
    constructor(pos, speed, reset) {
        this.pos = pos; 
        this.speed = speed; 
        this.reset = reset; 
    }

    get type() {
        return "lava"; 
    }

    static create(pos, ch) { //based on ch, provide pos and speed for the lava
        if (ch == "=") {
            return new Lava(pos, new Vec(2,0));
        } else if (ch == "|") {
            return new Lava(pos, new Vec(0,2));
        } else if (ch == "v") {
            return new Lava(pos, new Vec(0,3), pos);
        }
    }
}

Lava.prototype.size = new Vec(1,1); 


class Coin { //pos, base pos, wobble start point
    constructor(pos, basePos, wobble) {
        this.pos = pos; 
        this.basePos = basePos; 
        this.wobble = wobble; 
    }

    get type() {
        return "coin"; 
    }

    static create(pos) { //adding a small offset to pos
        let basePos = pos.plus(new Vec(0.2, 0.1)); 
        return new Coin(basePos, basePos, Math.random() * Math.PI*2); 
    }
}

Coin.prototype.size = new Vec(0.6, 0.6); 

class Player {
    constructor(pos, speed) {
        this.pos = pos; 
        this.speed = speed; 
    }
    
    get type() {
        return "player"; 
    }

    static create(pos) { //initial position and initial speed
        return new Player(pos.plus(new Vec(0, -0.5)), new Vec(0,0)); 
    }
}

Player.prototype.size = new Vec(0.8, 1.5); 

const levelChars = {
    ".": "empty", 
    "#": "wall",
    "+": "lava",
    "@": Player,
    "o": Coin,
    "=": Lava,
    "|": Lava,
    "v": Lava
}
// const level = new Level(simpleLevelPlan);
// console.log(`${level.width} by ${level.height}`);  

function elt(name, attrs, ...children) {
    let dom = document.createElement(name);
    for (let attr of Object.keys(attrs)) {
        dom.setAttribute(attr, attrs[attr]); 
    }

    for (let child of children) {
        dom.appendChild(child); 
    }
    return dom; 
}

class DOMDisplay {
    constructor(parent, level) {
        this.dom = elt("div", {class: "game"}, drawGrid(level)); 
        this.actorLayer = null; 
        parent.appendChild(this.dom); 
    }

    clear() {this.dom.remove()}
}

const scale = 20; 

function drawGrid(level) {
    return elt("table", {
        class: "background", 
        style: `width: ${level.width * scale}px`
    }, ...level.rows.map(row => 
        elt("tr", {style: `height: ${scale}px`}, 
            ...row.map(type => elt("td", {class: type}))
        ))); 
}

function drawActors(actors) {
    return elt("div", {}, ...actors.map(actor => {
        let rect = elt("div", {class: `actor ${actor.type}`}); 
        rect.style.width = `${actor.size.x * scale}px`;
        rect.style.height = `${actor.size.y * scale}px`;
        rect.style.left = `${actor.pos.x * scale}px`;
        rect.style.top = `${actor.pos.y * scale}px`;
        return rect;
    }))
}


DOMDisplay.prototype.syncState = function(state) {
    if (this.actorLayer) this.actorLayer.remove(); 
    this.actorLayer = drawActors(state.actors); 
    this.dom.appendChild(this.actorLayer); 
    this.dom.className = `game ${state.status}`; 
    this.scrollPlayerIntoView(state); 
}

DOMDisplay.prototype.scrollPlayerIntoView = function(state) {
  let width = this.dom.clientWidth;
  let height = this.dom.clientHeight;
  let margin = width / 3;

  // The viewport
  let left = this.dom.scrollLeft, right = left + width;
  let top = this.dom.scrollTop, bottom = top + height;

  let player = state.player;
  let center = player.pos.plus(player.size.times(0.5))
                         .times(scale);

  if (center.x < left + margin) {
    this.dom.scrollLeft = center.x - margin;
  } else if (center.x > right - margin) {
    this.dom.scrollLeft = center.x + margin - width;
  }
  if (center.y < top + margin) {
    this.dom.scrollTop = center.y - margin;
  } else if (center.y > bottom - margin) {
    this.dom.scrollTop = center.y + margin - height;
  }
};


 let simpelLevel = new Level(simpleLevelPlan);
//  console.log(simpelLevel)
let display = new DOMDisplay(document.body, simpelLevel); 
display.syncState(State.start(simpelLevel)); 


