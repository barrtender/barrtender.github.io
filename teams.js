
class Team {
    // u and t are glicko 2 mu and theta respectively.
    constructor(name, u, t){
        this.name = name;
        this.u = u;
        this.t = t;
    }
}

/*
In 5000 runs only these 3 won. I think the t values are too sure of themselves.
{TL: 1673, LGD: 1057, VP: 2270}

Multiplying by 2 gives other people at least some chance
{VP: 1359, TL: 1882, Team Secret: 160, LGD: 1595, EG: 4}
*/

const RANDOMNESS_BONUS = 2;

const groupA = [
    new Team("IG", 1871.13,	52.37*RANDOMNESS_BONUS),
    new Team("LGD", 2063.87, 47.05*RANDOMNESS_BONUS),
    new Team("EG",1985.56,	45.36*RANDOMNESS_BONUS),
    new Team("TL", 2068.20,	49.57*RANDOMNESS_BONUS),
    new Team("FNC", 1934.61, 43.17*RANDOMNESS_BONUS),
    new Team("Mineski", 1963.11, 48.44*RANDOMNESS_BONUS),
    new Team("OG", 1946.57, 48.84*RANDOMNESS_BONUS),
    new Team("VGJ.T",1906.27, 51.34*RANDOMNESS_BONUS),
    new Team("Winstrike", 1951.62, 59.34*RANDOMNESS_BONUS),
];

const groupB = [
    new Team("paiN",1812.34, 47.48*RANDOMNESS_BONUS),
    new Team("VG", 1982.41, 48.57*RANDOMNESS_BONUS),
    new Team("Newbee",1962.86, 48.38*RANDOMNESS_BONUS),
    new Team("Team Secret", 2012.08, 49.87*RANDOMNESS_BONUS),
    new Team("VP", 2078.50, 49.22*RANDOMNESS_BONUS),
    new Team("TNC",1946.03, 46.67*RANDOMNESS_BONUS),
    new Team("Optic",1937.69, 42.36*RANDOMNESS_BONUS),
        // Serenity is not in datdota, but they beat IG so I'm going to take the team right above IG's stats.
    new Team("Team Serenity", 1906.27, 51.34*RANDOMNESS_BONUS), 
    new Team("VGJ.Storm", 2010.48, 47.36*RANDOMNESS_BONUS),
];

const GROUP_A_FINAL = [
    new Team("TL", 2068.20,	49.57*RANDOMNESS_BONUS),
    new Team("EG",1985.56,	45.36*RANDOMNESS_BONUS),
    new Team("LGD", 2063.87, 47.05*RANDOMNESS_BONUS),
    new Team("OG", 1946.57, 48.84*RANDOMNESS_BONUS),
    new Team("FNC", 1934.61, 43.17*RANDOMNESS_BONUS),
    new Team("VGJ.T",1906.27, 51.34*RANDOMNESS_BONUS),
    new Team("Mineski", 1963.11, 48.44*RANDOMNESS_BONUS),
    new Team("Winstrike", 1951.62, 59.34*RANDOMNESS_BONUS),
];

const GROUP_B_FINAL = [
    new Team("VGJ.Storm", 2010.48, 47.36*RANDOMNESS_BONUS),
    new Team("VP", 2078.50, 49.22*RANDOMNESS_BONUS),
    new Team("Team Secret", 2012.08, 49.87*RANDOMNESS_BONUS),
    new Team("Optic",1937.69, 42.36*RANDOMNESS_BONUS),
    new Team("Newbee",1962.86, 48.38*RANDOMNESS_BONUS),
    new Team("TNC",1946.03, 46.67*RANDOMNESS_BONUS),
        // Serenity is not in datdota, but they beat IG so I'm going to take the team right above IG's stats.
    new Team("Team Serenity", 1906.27, 51.34*RANDOMNESS_BONUS), 
    new Team("VG", 1982.41, 48.57*RANDOMNESS_BONUS),
]

const TEAMS = {};

for (var team of groupA.concat(groupB)) {
    TEAMS[team.name] = team;
}
