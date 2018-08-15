class Groups {
    constructor(teams, randomizer) {
        this.teams = teams;
        this.randomizer = randomizer;
        this.pointCounts = {};
        this.results = []
    }

    runGroup() {
        for (var team of this.teams) {
            this.pointCounts[team.name] = 0;
        }
        for (let i=0; i<this.teams.length-1; i++) {
            const teami = this.teams[i];
            for (let j=i+1; j<this.teams.length; j++) {
                const teamj = this.teams[j];
                const bo2Result = playGames(2, teami, teamj, this.randomizer);
                this.results.push(bo2Result);
                console.log(`${teami.name} faced ${teamj.name} and the result was: ${bo2Result[teami.name]} - ${bo2Result[teamj.name]}`);
                this.pointCounts[teami.name] += bo2Result[teami.name];
                this.pointCounts[teamj.name] += bo2Result[teamj.name];
            }
        }
        return  Object.keys(this.pointCounts).map((teamName) => {
            return {
                name: teamName,
                points: this.pointCounts[teamName]
            };
        }).sort((a, b) => a.points < b.points);
    }
}