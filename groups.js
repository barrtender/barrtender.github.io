class Groups {
    constructor(teams, randomizer) {
        this.teams = teams;
        this.randomizer = randomizer;
        this.results = {};
    }

    runGroup() {
        for (var team of this.teams) {
            this.results[team.name] = 0;
        }
        for (let i=0; i<this.teams.length-1; i++) {
            for (let j=i+1; j<this.teams.length; j++) {
                const bo2Result = playBO2(this.teams[i], this.teams[j], this.randomizer);
                console.log(`${this.teams[i]} faced ${this.teams[j]} and the result was:`);
                for (let teamResult of bo2Result) {
                    console.log(`${teamResult} won`);
                    this.results[teamResult] += bo2Result[teamResult];
                }
            }
        }
    }
}