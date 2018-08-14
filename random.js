// I want a random number generator with a seed.
// https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript

class Random {
    constructor(seed) {
        this.seed = seed || 1;
    }
    
    setSeed(newSeed) {
        this.seed = newSeed;
    }

    next() {
        var x = Math.sin(this.seed++) * 10000;
        return x - Math.floor(x);
    }
}