
class Team {
    // u and t are glicko 2 mu and theta respectively.
    constructor(name, u, t){
        this.name = name;
        this.u = u;
        this.t = t;
    }
}

const TEAM_LIST = [
    new Team("IG", 1871.13,	52.37),
    new Team("LGD", 2063.87, 47.05),
    new Team("EG",1985.56,	45.36 ),
    new Team("TL", 2068.20,	49.57),
    new Team("FNC", 1934.61, 43.17),
    new Team("Mineski", 1963.11, 48.44),
    new Team("OG", 1946.57, 48.84),
    new Team("VGJ.T",1906.27, 51.34 ),
    new Team("Winstrike", 1951.62, 59.34),

    new Team("paiN",1812.34, 47.48 ),
    new Team("Vici Gaming", 1982.41, 48.57),
    new Team("Newbee",1962.86, 48.38 ),
    new Team("Team Secret", 2012.08, 49.87),
    new Team("VP", 2078.50, 49.22),
    new Team("TNC",1946.03, 46.67 ),
    new Team("Optic",1937.69, 42.36 ),
        // Serenity is not in datdota, but they beat IG so I'm going to take the team right above IG's stats.
    new Team("Team Serenity", 1906.27, 51.34), 
    new Team("VGJ Storm", 2010.48, 47.36),
]

const TEAMS = {};

for (var team of TEAM_LIST) {
    TEAMS[team.name] = team;
}
