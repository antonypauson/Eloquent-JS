const box = new class {
    locked = true; 

    #content = [];

    unlock() {
        this.locked = false; 
    }

    lock() {
        this.locked = true; 
    }

    get content() {
        if (this.locked) throw new Error("locked");
        return this.#content;
    }
}

function withBoxUnlocked(body) {
    //This is where i have to write code
   const wasLocked = box.locked;

   if (wasLocked) box.unlock();

   try {
        body;
   } finally {
        if (wasLocked) box.lock();
   }
}

withBoxUnlocked(() => {
    box.content.push("gold piece");
})

console.log(box);

try {
    withBoxUnlocked(() => {
        throw new Error("Pirates on the horizon! Abort");
    }); 
} catch (e) {
    console.log("Error raised: " + e);
}
console.log(box.locked);