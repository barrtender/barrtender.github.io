// This assumes you'd pick the lowest seed to face against.
class MainEvent {
    constructor(groupA, groupB, randomizer) {
        this.groupA = groupA;
        this.groupB = groupB;
        this.randomizer = randomizer;
        this.gameResults = [];
    }

    runEvent() {
        // Column 1
        this.gameResults.push(playGames(1, this.groupA[4], this.groupB[7], this.randomizer));
        this.gameResults.push(playGames(1, this.groupB[5], this.groupA[6], this.randomizer));
        this.gameResults.push(playGames(1, this.groupB[4], this.groupA[7], this.randomizer));
        this.gameResults.push(playGames(1, this.groupA[5], this.groupB[6], this.randomizer));

        // Column 2
        // Upper bracket
        this.gameResults.push(playGames(3, this.groupA[0], this.groupB[3], this.randomizer));
        this.gameResults.push(playGames(3, this.groupB[1], this.groupA[2], this.randomizer));
        this.gameResults.push(playGames(3, this.groupB[0], this.groupA[3], this.randomizer));
        this.gameResults.push(playGames(3, this.groupA[1], this.groupB[2], this.randomizer));

        // Lower bracket
        this.gameResults.push(playGames(3, TEAMS[determineWinner(this.gameResults[0])], 
                              TEAMS[determineLoser(this.gameResults[4])], this.randomizer));
        this.gameResults.push(playGames(3, TEAMS[determineWinner(this.gameResults[1])], 
                              TEAMS[determineLoser(this.gameResults[5])], this.randomizer));
        this.gameResults.push(playGames(3, TEAMS[determineWinner(this.gameResults[2])], 
                              TEAMS[determineLoser(this.gameResults[6])], this.randomizer));
        this.gameResults.push(playGames(3, TEAMS[determineWinner(this.gameResults[3])], 
                              TEAMS[determineLoser(this.gameResults[7])], this.randomizer));

        // Column 3
        // Lower bracket
        this.gameResults.push(playGames(3, TEAMS[determineWinner(this.gameResults[8])],        
                              TEAMS[determineWinner(this.gameResults[9])], this.randomizer));
        this.gameResults.push(playGames(3, TEAMS[determineWinner(this.gameResults[10])],        
                              TEAMS[determineWinner(this.gameResults[11])], this.randomizer));

        // Column 4
        // Upper bracket
        this.gameResults.push(playGames(3, TEAMS[determineWinner(this.gameResults[4])],
                              TEAMS[determineWinner(this.gameResults[5])], this.randomizer));
        this.gameResults.push(playGames(3, TEAMS[determineWinner(this.gameResults[6])],        
                              TEAMS[determineWinner(this.gameResults[7])], this.randomizer));
        
        this.gameResults.push(playGames(3, TEAMS[determineWinner(this.gameResults[12])],        
                              TEAMS[determineLoser(this.gameResults[14])], this.randomizer));
        this.gameResults.push(playGames(3, TEAMS[determineWinner(this.gameResults[13])],        
                              TEAMS[determineLoser(this.gameResults[15])], this.randomizer));

        // Column 5
        // LB round 5
        this.gameResults.push(playGames(3, TEAMS[determineWinner(this.gameResults[16])],
                              TEAMS[determineWinner(this.gameResults[17])], this.randomizer));

        // Column 6
        // UB finals
        this.gameResults.push(playGames(3, TEAMS[determineWinner(this.gameResults[14])],
                              TEAMS[determineWinner(this.gameResults[15])], this.randomizer));

        // LB finals
        this.gameResults.push(playGames(3, TEAMS[determineLoser(this.gameResults[19])],
                              TEAMS[determineWinner(this.gameResults[18])], this.randomizer));

        // Grand finals
        this.gameResults.push(playGames(5, TEAMS[determineWinner(this.gameResults[19])],
                              TEAMS[determineWinner(this.gameResults[20])], this.randomizer));

        //console.log(JSON.stringify(this.gameResults));

        return this.gameResults;
    }
}