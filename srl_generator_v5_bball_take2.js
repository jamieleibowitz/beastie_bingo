(function(j, i, g, m, k, n, o) {
    function q(b) {
        var e, f, a = this,
            c = b.length,
            d = 0,
            h = a.i = a.j = a.m = 0;
        a.S = [];
        a.c = [];
        for (c || (b = [c++]); d < g;) a.S[d] = d++;
        for (d = 0; d < g; d++) e = a.S[d], h = h + e + b[d % c] & g - 1, f = a.S[h], a.S[d] = f, a.S[h] = e;
        a.g = function(b) {
            var c = a.S,
                d = a.i + 1 & g - 1,
                e = c[d],
                f = a.j + e & g - 1,
                h = c[f];
            c[d] = h;
            c[f] = e;
            for (var i = c[e + h & g - 1]; --b;) d = d + 1 & g - 1, e = c[d], f = f + e & g - 1, h = c[f], c[d] = h, c[f] = e, i = i * g + c[e + h & g - 1];
            a.i = d;
            a.j = f;
            return i
        };
        a.g(g)
    }

    function p(b, e, f, a, c) {
        f = [];
        c = typeof b;
        if (e && c == "object")
            for (a in b)
                if (a.indexOf("S") < 5) try {
                    f.push(p(b[a], e - 1))
                } catch (d) {}
                return f.length ? f : b + (c != "string" ? "\0" : "")
    }

    function l(b, e, f, a) {
        b += "";
        for (a = f = 0; a < b.length; a++) {
            var c = e,
                d = a & g - 1,
                h = (f ^= e[a & g - 1] * 19) + b.charCodeAt(a);
            c[d] = h & g - 1
        }
        b = "";
        for (a in e) b += String.fromCharCode(e[a]);
        return b
    }
    i.seedrandom = function(b, e) {
        var f = [],
            a;
        b = l(p(e ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), f);
        a = new q(f);
        l(a.S, j);
        i.random = function() {
            for (var c = a.g(m), d = o, b = 0; c < k;) c = (c + b) * g, d *= g, b = a.g(1);
            for (; c >= n;) c /= 2, d /= 2, b >>>= 1;
            return (c + b) / d
        };
        return b
    };
    o = i.pow(g, m);
    k = i.pow(2, k);
    n = k * 2;
    l(i.random(), j)
})([], Math, 256, 6, 52);

bingoGenerator = function(bingoList, opts) {
    var LANG = opts.lang || 'name';
    var MODE = opts.mode || "normal";
    var cardType = "Normal";
    var SEED = opts.seed || Math.ceil(999999 * Math.random()).toString();
    var size = 5;

    // The original SRL generators were written with 1-indexed difficuty tiers.
    // If we get a goal list that is 0-indexed, hack it to be 1-indexed instead.
    if (bingoList.length === 25) {
        var originalBingoList = bingoList;
        bingoList = [undefined].concat(originalBingoList);  // filler value for index 0
    }

    if (true) {
        Math.seedrandom(SEED);
        var MAX_SEED = 999999;

        var lineCheckList = [];
        if (size == 5) {
            lineCheckList[1] = [1, 2, 3, 4, 5, 10, 15, 20, 6, 12, 18, 24];
            lineCheckList[2] = [0, 2, 3, 4, 6, 11, 16, 21];
            lineCheckList[3] = [0, 1, 3, 4, 7, 12, 17, 22];
            lineCheckList[4] = [0, 1, 2, 4, 8, 13, 18, 23];
            lineCheckList[5] = [0, 1, 2, 3, 8, 12, 16, 20, 9, 14, 19, 24];
            lineCheckList[6] = [0, 10, 15, 20, 6, 7, 8, 9];
            lineCheckList[7] = [0, 12, 18, 24, 5, 7, 8, 9, 1, 11, 16, 21];
            lineCheckList[8] = [5, 6, 8, 9, 2, 12, 17, 22];
            lineCheckList[9] = [4, 12, 16, 20, 9, 7, 6, 5, 3, 13, 18, 23];
            lineCheckList[10] = [4, 14, 19, 24, 8, 7, 6, 5];
            lineCheckList[11] = [0, 5, 15, 20, 11, 12, 13, 14];
            lineCheckList[12] = [1, 6, 16, 21, 10, 12, 13, 14];
            lineCheckList[13] = [0, 6, 12, 18, 24, 20, 16, 8, 4, 2, 7, 17, 22, 10, 11, 13, 14];
            lineCheckList[14] = [3, 8, 18, 23, 10, 11, 12, 14];
            lineCheckList[15] = [4, 9, 19, 24, 10, 11, 12, 13];
            lineCheckList[16] = [0, 5, 10, 20, 16, 17, 18, 19];
            lineCheckList[17] = [15, 17, 18, 19, 1, 6, 11, 21, 20, 12, 8, 4];
            lineCheckList[18] = [15, 16, 18, 19, 2, 7, 12, 22];
            lineCheckList[19] = [15, 16, 17, 19, 23, 13, 8, 3, 24, 12, 6, 0];
            lineCheckList[20] = [4, 9, 14, 24, 15, 16, 17, 18];
            lineCheckList[21] = [0, 5, 10, 15, 16, 12, 8, 4, 21, 22, 23, 24];
            lineCheckList[22] = [20, 22, 23, 24, 1, 6, 11, 16];
            lineCheckList[23] = [2, 7, 12, 17, 20, 21, 23, 24];
            lineCheckList[24] = [20, 21, 22, 24, 3, 8, 13, 18];
            lineCheckList[25] = [0, 6, 12, 18, 20, 21, 22, 23, 19, 14, 9, 4];
        }

        function mirror(i) {
            if (i == 0) {
                i = 4;
            } else if (i == 1) {
                i = 3;
            } else if (i == 3) {
                i = 1;
            } else if (i == 4) {
                i = 0;
            }
            return i;
        }

        function difficulty(i) {
            var Num3 = SEED % 1000;
            var Rem8 = Num3 % 8;
            var Rem4 = Math.floor(Rem8 / 2);
            var Rem2 = Rem8 % 2;
            var Rem5 = Num3 % 5;
            var Rem3 = Num3 % 3;
            var RemT = Math.floor(Num3 / 120);
            var Table5 = [0];
            Table5.splice(Rem2, 0, 1);
            Table5.splice(Rem3, 0, 2);
            Table5.splice(Rem4, 0, 3);
            Table5.splice(Rem5, 0, 4);
            Num3 = Math.floor(SEED / 1000);
            Num3 = Num3 % 1000;
            Rem8 = Num3 % 8;
            Rem4 = Math.floor(Rem8 / 2);
            Rem2 = Rem8 % 2;
            Rem5 = Num3 % 5;
            Rem3 = Num3 % 3;
            RemT = RemT * 8 + Math.floor(Num3 / 120);
            var Table1 = [0];
            Table1.splice(Rem2, 0, 1);
            Table1.splice(Rem3, 0, 2);
            Table1.splice(Rem4, 0, 3);
            Table1.splice(Rem5, 0, 4);
            i--;
            RemT = RemT % 5;
            x = (i + RemT) % 5;
            y = Math.floor(i / 5);
            var e5 = Table5[(x + 3 * y) % 5];
            var e1 = Table1[(3 * x + y) % 5];
            value = 5 * e5 + e1;
            if (MODE == "short") {
                value = Math.floor(value / 2);
            } else if (MODE == "long") {
                value = Math.floor((value + 25) / 2);
            }
            value++;
            return value;
        }

        function checkLine(i, typesA) {
            var synergy = 0;
            for (var j = 0; j < lineCheckList[i].length; j++) {
                var typesB = bingoBoard[lineCheckList[i][j] + 1].types;
                if (typeof typesA != 'undefined' && typeof typesB != 'undefined') {
                    for (var k = 0; k < typesA.length; k++) {
                        for (var l = 0; l < typesB.length; l++) {
                            if (typesA[k] == typesB[l]) {
                                synergy++;
                                if (k == 0) {
                                    synergy++
                                };
                                if (l == 0) {
                                    synergy++
                                };
                            }
                        }
                    }
                }
            }
            return synergy;
        }
        var bingoBoard = [];
        for (var i = 1; i <= 25; i++) {
            bingoBoard[i] = {
                difficulty: difficulty(i)
            };
        }
        for (var i = 1; i <= 25; i++) {
            var getDifficulty = bingoBoard[i].difficulty;
            var RNG = Math.floor(bingoList[getDifficulty].length * Math.random());
            if (RNG == bingoList[getDifficulty].length) {
                RNG--;
            };
            var j = 0,
                synergy = 0,
                currentObj = null,
                minSynObj = null;
            do {
                currentObj = bingoList[getDifficulty][(j + RNG) % bingoList[getDifficulty].length];
                synergy = checkLine(i, currentObj.types);
                if (minSynObj == null || synergy < minSynObj.synergy) {
                    minSynObj = {
                        synergy: synergy,
                        value: currentObj
                    };
                }
                j++;
            } while ((synergy != 0) && (j < bingoList[getDifficulty].length));
            bingoBoard[i].types = minSynObj.value.types;
            bingoBoard[i].name = minSynObj.value[LANG] || minSynObj.value.name;
            bingoBoard[i].synergy = minSynObj.synergy;
        }
        
        bingoBoard.shift();
        return bingoBoard;
    }
}

var bingoList = [];
bingoList[1] = [
    {"name": "Listen to Sports King's theme up to the solo", "types": []},
    {"name": "Win a match in auto mode", "types": []},
    {"name": "Recruit a Kaleidarn", "types": ["recruit"]},
    {"name": "Use the same combo play twice in one match", "types": ["relationships"]},
    {"name": "Free ball 5 times in a single point", "types": []}
];

bingoList[2] = [
    {"name": "3 of Marlin's beasties around Rutile", "types": ["guardians"]},
    {"name": "Beat Gene in Jasper Mines", "types": ["miscfights"]},
    {"name": "Give a beastie 10 ice cream in a row", "types": []},
    {"name": "Recruit a Webbounce", "types": ["recruit"]},
    {"name": "Recruit a Waglash or Riplash", "types": ["recruit"]},
    {"name": "Recruit a Troglum", "types": ["recruit"]},
    {"name": "Fulfil the recruit conditions for 3 or more beasties in one wild encounter", "types": ["recruit"]},
    {"name": "Beat Jay in Beryl", "types": ["miscfights"]},
    {"name": "Beat Gene in any location", "types": ["miscfights"]}
];

bingoList[3] = [
    {"name": "Beat the Raging Blazes", "types": ["ranked"]},
    {"name": "Beat the Mythic Dreamers", "types": ["ranked"]},
    {"name": "Beat Gene on Periwinkle Islet", "types": ["miscfights"]},
    {"name": "2 Attract Sprays from Miranda", "types": ["research"]},
    {"name": "Wear a Trat Can", "types": ["fashion"]},
    {"name": "All items in miconia grove", "types": ["collect"]},
    {"name": "Deal 200+ damage with one attack", "types": ["moves"]},
    {"name": "Recruit a Trat", "types": ["recruit"]},
    {"name": "Have your beasties bounce a ball 50 times", "types": []},
    {"name": "2 Spa Salts", "types": ["collect"]}
];

bingoList[4] = [
    {"name": "Have a beastie learn a non-level-up move", "types": ["relationships"]},
    {"name": "2 guardians in Rutile Preserve (past the gate)", "types": ["guardians"]},
    {"name": "Learn a friendship move at the diner", "types": ["relationships"]},
    {"name": "Lower any single stat on an opponent 6 levels", "types": ["moves"]},
    {"name": "Clean up 10 pieces of litter", "types": []},
    {"name": "Recruit a Squimage", "types": ["recruit"]},
    {"name": "Use three different combo plays in one match", "types": ["relationships"]},
    {"name": "max out a beastie’s body defense", "types": ["money"]},
    {"name": "max out a beastie’s spirit defense", "types": ["money"]},
    {"name": "max out a beastie’s mind defense", "types": ["money"]},
    {"name": "Recruit diggum", "types": ["recruit"]}
];

bingoList[5] = [
    {"name": "Hang out with Riley", "types": ["social"]},
    {"name": "Hang out with Reese", "types": ["social"]},
    {"name": "Visit 4 campsites", "types": ["exploration"]},
    {"name": "3 guardians in Jasper Mines", "types": ["guardians"]},
    {"name": "3 guardians on Coquelicot Beach", "types": ["guardians"]},
    {"name": "3 guardians on the Chroma Sea", "types": ["guardians"]},
    {"name": "Get a Stinky Spray from Naveen", "types": ["research"]},
    {"name": "Security Card", "types": ["collect"]},
    {"name": "All items in quartz canyon", "types": ["collect"]},
    {"name": "Get a contact to teach a beastie a friend move", "types": ["social"]},
    {"name": "Buy a complete outfit", "types": ["money", "fashion"]},
    {"name": "Fully raise and lower a demolipede in the park", "types": []},
    {"name": "Find 1 of each type of shiny object", "types": ["collect"]}
];

bingoList[6] = [
    {"name": "Beat the Wild Flowers", "types": ["ranked"]},
    {"name": "2 guardians in Solanum Weald", "types": ["guardians"]},
    {"name": "3 guardians in the cave near Crown Farms", "types": ["guardians"]},
    {"name": "Obtain an extinct beastie", "types": ["metamorph"]},
    {"name": "3 relationships", "types": ["relationships"]},
    {"name": "Win a Ranked Match without your starters", "types": ["ranked", "recruit"]},
    {"name": "Lose against mohan", "types": ["ranked"]},
    {"name": "Coach a non-starter beastie to 100%", "types": ["collect"]},
    {"name": "Open all gates in eburnean cavern", "types": ["platform"]},
    {"name": "Apply the 'shook' condition to an opponent 3 times in one match", "types": ["moves"]},
    {"name": "Apply the 'tender' condition to an opponent", "types": ["moves"]},
    {"name": "Metamorph the same beastie twice", "types": ["metamorph"]},
    {"name": "Play the cassette player for the tortanchor on Cerise Atoll", "types": []},
    {"name": "Hang out with Riven", "types": ["social", "ranked"]},
    {"name": "Hang out with Kaz", "types": ["social", "ranked"]},
    {"name": "Talk to Chiaka in Crown Farms", "types": []},
    {"name": "Have 5 total recruited beasties", "types": ["recruit"]},
    {"name": "3 metamorphs", "types": ["metamorph"]}
];

bingoList[7] = [
    {"name": "Wear a Pirate Hat", "types": ["fashion"]},
    {"name": "Beat 2 ranked coaches", "types": ["ranked"]},
    {"name": "2 guardians in Mainframe", "types": ["guardians"]},
    {"name": "Beat Gene in Garcinia Meadow", "types": ["miscfights"]},
    {"name": "Beat the Mega Beasts in Mainframe or Domain Park", "types": ["miscfights"]},
    {"name": "Metamorph a petula into flowish", "types": ["metamorph"]},
    {"name": "All items in neptune stadium", "types": ["collect"]},
    {"name": "Apply 5 stacks of sweaty to an opponent", "types": ["moves"]},
    {"name": "Recruit a Proteos", "types": ["recruit"]},
    {"name": "Have 3 different field effects on the field at once", "types": ["moves"]},
    {"name": "2 nonstarter beasties whose highest attacking type is body", "types": ["recruit"]},
    {"name": "2 nonstarter beasties whose highest attacking type is spirit", "types": ["recruit"]},
    {"name": "2 nonstarter beasties whose highest attacking type is mind", "types": ["recruit"]}
];

bingoList[8] = [
    {"name": "Beat the Golden Gods", "types": ["ranked"]},
    {"name": "Visit 2 extinct beasties", "types": ["exploration"]},
    {"name": "Beat the Beatles", "types": ["guardians"]},
    {"name": "2 Super Athletic Sprays", "types": ["collect"]},
    {"name": "Wear a Witch Hat", "types": ["fashion"]},
    {"name": "Recruit crabaret", "types": ["recruit"]},
    {"name": "All items in domain park", "types": ["collect", "platform"]},
    {"name": "Use tea leaves on a beastie with maxed stats", "types": ["collect", "money"]},
    {"name": "Open all gates in quartz canyon", "types": ["platform"]},
    {"name": "Recruit a Beelb", "types": ["recruit"]},
    {"name": "Hang out with Celia", "types": ["social", "ranked"]},
    {"name": "Beat Gene in two different locations", "types": ["miscfights", "exploration"]},
    {"name": "Find 2 of each type of shiny object", "types": ["collect", "exploration"]},
    {"name": "Get 4 Attract Sprays from Miranda", "types": ["research"]},
    {"name": "Recruit oppossur", "types": ["recruit"]}
];

bingoList[9] = [
    {"name": "2 Tea Leaves", "types": ["collect", "exploration"]},
    {"name": "Beat Indie in Domain Park", "types": ["miscfights"]},
    {"name": "2 guardians in Quartz Canyon", "types": ["guardians"]},
    {"name": "Go for a swim in 4 regions", "types": ["exploration"]},
    {"name": "Defeat Korwin in Quartz Canyon", "types": ["guardians"]},
    {"name": "Open all gates in jasper mines", "types": []},
    {"name": "Recruit 3 single stage beasties", "types": ["recruit"]},
    {"name": "Get 3 Stinky Sprays from Naveen", "types": ["research", "exploration"]}
];

bingoList[10] = [
    {"name": "2 guardians in Neptune Stadium", "types": ["guardians"]},
    {"name": "Beat 3 rowdy beasties", "types": ["miscfights"]},
    {"name": "Visit 6 campsites", "types": ["exploration"]},
    {"name": "2 guardians in Eburnean Cavern", "types": ["guardians"]},
    {"name": "10 beasties researched", "types": ["research"]},
    {"name": "Get 3 hearts with one of your contacts", "types": ["social"]},
    {"name": "Have one of each type of jersey in your inventory at once", "types": ["collect"]},
    {"name": "Hang out with Sunsoo", "types": ["social", "ranked"]},
    {"name": "recruit a full team of the same beastie line", "types": ["recruit"]}
];

bingoList[11] = [
    {"name": "Recruit an Armantis", "types": ["recruit"]},
    {"name": "1 guardian on Attalea Path", "types": ["guardians"]},
    {"name": "1 guardian in Domain Park", "types": ["guardians"]},
    {"name": "3 Glimmering Objects", "types": ["collect", "exploration"]},
    {"name": "Have $1000", "types": ["money"]},
    {"name": "Metamorph seakit", "types": ["metamorph", "exploration"]},
    {"name": "Recruit a Grazada", "types": ["recruit"]},
    {"name": "5 metamorphs", "types": ["metamorph"]},
    {"name": "Recruit druppa", "types": ["recruit"]}
];

bingoList[12] = [
    {"name": "All items in solanum weald", "types": ["collect", "platform", "miscfights"]},
    {"name": "Beat 3 ranked coaches", "types": ["ranked"]},
    {"name": "Beat Rex in Garcinia Meadow", "types": ["miscfights"]},
    {"name": "Visit 3 extinct beasties", "types": ["exploration"]},
    {"name": "Collect all items in tawny wilds", "types": ["collect", "platform"]}
];

bingoList[13] = [
    {"name": "Beat rowdy Wottle in Domain Park", "types": ["miscfights"]},
    {"name": "Beat the Party Pirates", "types": ["ranked"]},
    {"name": "1 guardian in Tawny Wilds", "types": ["guardians"]},
    {"name": "Recruit a Conjarr", "types": ["recruit"]},
    {"name": "Recruit crawlurk", "types": ["recruit"]}
];

bingoList[14] = [
    {"name": "Complete naveen's quest", "types": ["research"]},
    {"name": "15 beasties researched", "types": ["research"]},
    {"name": "recruit 4 nonstarter beasties whose highest attacking type is body", "types": ["recruit"]},
    {"name": "recruit 4 nonstarter beasties whose highest attacking type is spirit", "types": ["recruit"]},
    {"name": "recruit 4 nonstarter beasties whose highest attacking type is mind", "types": ["recruit"]},
    {"name": "have 3 nonstarter beasties hit 100% coached", "types": ["collect", "recruit"]}
];

bingoList[15] = [
    {"name": "Defeat each of the high schoolers with a combo play", "types": ["miscfights", "relationships"]},
    {"name": "Hang out with Elena", "types": ["social", "ranked"]},
    {"name": "Beat the Hello Freaks", "types": ["ranked"]},
    {"name": "Visit 8 campsites", "types": ["exploration"]},
    {"name": "Have 10 total recruited beasties", "types": ["recruit"]}
];

bingoList[16] = [
    {"name": "Visit 4 extinct beasties", "types": ["exploration"]},
    {"name": "Beat 4 ranked coaches", "types": ["ranked"]},
    {"name": "Get 5 Attract Sprays from Miranda", "types": ["research", "metamorph"]}
];

bingoList[17] = [
    {"name": "Register for the Crown Series", "types": ["ranked"]},
    {"name": "Beat rowdy Varkabond at Cordia Lake", "types": ["miscfights"]},
    {"name": "7 metamorphs", "types": ["metamorph"]}
];

bingoList[18] = [
    {"name": "Defeat an extinct beastie", "types": ["miscfights"]},
    {"name": "20 beasties researched", "types": ["research"]},
    {"name": "Get all 3 spreckomorphs", "types": ["metamorph", "exploration"]},
    {"name": "Recruit 6 single stage beasties", "types": ["recruit"]}
];

bingoList[19] = [
    {"name": "Beat the Silent Warriors", "types": ["ranked"]},
    {"name": "Tell Riley you like her outfit", "types": ["ranked"]},
    {"name": "Metamorph punkchirp into magpike", "types": ["metamorph", "relationships"]}
];

bingoList[20] = [
  {"name": "Apply each feeling at least once in the same fight", "types": ["moves"]},
];

bingoList[21] = [
    {"name": "Beat the Magic Moons", "types": ["ranked"]},
    {"name": "Lose in the Crown Series", "types": ["ranked"]}
];

bingoList[22] = [
    {"name": "Beat 5 ranked coaches", "types": ["ranked"]},
    {"name": "Beat the Rutile All-Stars in the Crown Series", "types": ["ranked"]},
    {"name": "Beat Legend of Office", "types": ["social"]}
];

bingoList[23] = [
    {"name": "Complete the Crown Series", "types": ["ranked"]},
    {"name": "Have 15 total recruited beasties", "types": ["recruit"]}
];

bingoList[24] = [
    {"name": "Beat Valerie after the Crown Series", "types": ["ranked"]},
    {"name": "Enter the Alto Alps", "types": ["ranked", "exploration"]},
    {"name": "have 7 nonstarter beasties hit 100% coached", "types": ["collect", "recruit"]}
];

bingoList[25] = [
    {"name": "Beat the Tower Tourney", "types": ["ranked"]},
    {"name": "Beat Riley at the summit of the Alto Alps", "types": ["ranked", "exploration"]}
];

var board = bingoGenerator(bingoList, [])
console.log(JSON.stringify(board))