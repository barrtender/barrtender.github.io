

function playGame(team1, team2, randomizer) {
    if (e(team1.u, team2.u, team2.t) >= randomizer.next()) {
        return team1;
    }
    return team2;
}

function playGames(numGames, team1, team2, randomizer) {
    const results = {};
    results[team1.name]=0;
    results[team2.name]=0;
    for (let i=0;i<numGames;i++) {
        if (results)
        results[playGame(team1, team2, randomizer).name]++;
        if (results[team1.name] > numGames/2 || results[team2.name] > numGames/2) {
            break;
        }
    }
    return results;
}

function determineWinner(results) {
    return Object.keys(results).map((key) => {
        return {
            name: key,
            points: results[key]
        };
    }).sort((a, b) => a.points < b.points)[0].name;
}

function determineLoser(results) {
    return Object.keys(results).map((key) => {
        return {
            name: key,
            points: results[key]
        };
    }).sort((a, b) => a.points >= b.points)[0].name;
}