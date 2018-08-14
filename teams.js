
class Team {
    // u and t are glicko 2 mu and theta respectively.
    constructor(name, u, t){
        this.name = name;
        this.u = u;
        this.t = t;
    }
}

const TEAMS = {
    IG: new Team("IG", 1871.13,	52.37),
    LGD: new Team("LGD", 2063.87, 47.05),
    EG: new Team("EG",1985.56,	45.36 ),
    TL: new Team("TL", 2068.20,	49.57),
    FNC: new Team("FNC", 1934.61, 43.17),
    MSK: new Team("Mineski", 1963.11, 48.44),
    OG: new Team("OG", 1946.57, 48.84),
    VGJT: new Team("VGJ.T",1906.27, 51.34 ),
    WST: new Team("Winstrike", 1951.62, 59.34	),

    PAIN: new Team("paiN",1812.34, 47.48 ),
    VG: new Team("Vici Gaming", 1982.41, 48.57),
    NB: new Team("Newbee",1962.86, 48.38 ),
    TS: new Team("Team Secret", 2012.08, 49.87),
    VP: new Team("VP", 2078.50, 49.22),
    TNC: new Team("TNC",1946.03, 46.67 ),
    OPTIC: new Team("Optic",1937.69, 42.36 ),
    // Serenity is not in datdota, but they beat IG so I'm going to take the team right above IG's stats.
    SERENITY: new Team("Team Serenity", 1906.27, 51.34), 
    VGJS: new Team("VGJ Storm", 2010.48, 47.36),
}
