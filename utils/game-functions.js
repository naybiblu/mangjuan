const { randInt } = require('./regular-functions.js');
const emo = require('./emojis.js');

module.exports = {
    luckyEgg: function(int) {
        switch (int) {
            case 1: return randInt(50, 86); // epic egg
            case 2: return randInt(80, 100); // rare egg
            default: return randInt(0, 51); // regular egg
        }
        return chance;
    },
    pickChicken: function (int) {
        let chicken;
        if (int >= 0 && int <= 50) chicken = randInt(0, 1); // regular
        if (int > 50 && int <= 90) chicken = randInt(2, 3) // epic
        if (int > 90 && int <= 100) chicken = 4; // rare
        const coop = [
            emo.lightbrownch,
            emo.brownch,
            emo.bluech,
            emo.emeraldch,
            emo.goldench
        ];
        
        let chickenInfo = { emoji: coop[chicken], name: "myCock", type: "Ol\'-fashioned Cock", lvl: 1, hp: 50, atk: randInt(10, 20), def: randInt(10, 20), spd: randInt(5, 10), luck: randInt(0, 5) }
        switch (chicken) {
            case 0: case 1: return chickenInfo;
            case 2: chickenInfo.type = "Avatar Cock"; chickenInfo.lvl = randInt(2, 4); chickenInfo.hp = 75; chickenInfo.atk = randInt(21, 25); chickenInfo.def = randInt(21, 25); chickenInfo.spd = randInt(11, 13); chickenInfo.luck = randInt(6, 7); return chickenInfo;
            case 3: chickenInfo.type = "Vegan Cock"; chickenInfo.lvl = randInt(3, 4); chickenInfo.hp = 80; chickenInfo.atk = randInt(30, 35); chickenInfo.def = randInt(25, 27); chickenInfo.spd = randInt(13, 15); chickenInfo.luck = randInt(3, 6); return chickenInfo;
            case 4: chickenInfo.type = "Golden Cock"; chickenInfo.lvl = randInt(6, 10); chickenInfo.hp = 100; chickenInfo.atk = randInt(36, 50); chickenInfo.def = randInt(28, 36); chickenInfo.spd = randInt(14, 20); chickenInfo.luck = randInt(8, 10); return chickenInfo;
            
        }
    }
}