function wait(time) {
    return new Promise(accept => setTimeout(accept, time)); 
}

class VideoPlayer {
    constructor(frames, frameTime) {
        this.frames = frames; 
        this.frameTime = frameTime;
        this.stopped = true; 
    }

    async play() {
        this.stopped = false; 
        for (let i = 0;!this.stopped;i++) {
            let nextFrame = wait(this.frameTime); //promise which will be resolved after a time
            await displayFrame(this.frames[i % this.frames.length]); 
            //pauses until we resolves this
            await nextFrame; 
            //pauses until we resolves this. After time, we don't have anything to do; 
        }
    }
}
