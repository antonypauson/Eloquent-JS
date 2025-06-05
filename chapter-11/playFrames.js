async function playFrames() {
    const frames = ["😀", "😎", "🤖"];

    for (let i = 0; i < 10; i++) {
        console.log(frames[i % frames.length]); 
        await wait(500);
    }
}

function wait(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

playFrames();