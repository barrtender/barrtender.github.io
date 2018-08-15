

function playGame(team1, team2, randomizer) {
    if (e(team1.u, team2.u, team2.t) >= randomizer.next()) {
        return team1;
    }
    return team2;
}

function playBO2(team1, team2, randomizer) {
    const results = {};
    results[team1.name]=0;
    results[team2.name]=0;
    results[playGame(team1, team2, randomizer).name]++;
    results[playGame(team1, team2, randomizer).name]++;
    return results;
}
