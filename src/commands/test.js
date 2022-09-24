const { pickChicken, luckyEgg } = require('./../../utils/game-functions.js');
const { randInt } = require('./../../utils/regular-functions.js');

module.exports = {
    data: {
        name: "test",
        description: "A test command, obviously!"
    },
    permissions: ["Administrator"],
    type: "GuildText",
    async execute(client, i, language, guild, user) {
        
        const egg = luckyEgg(randInt(0, 2));
        
        const chicken = pickChicken(egg); 
        const embed = {
            title: `${chicken.emoji} You got ${["a", "e", "i", "o", "u"].includes(chicken.type.toLowerCase().substr(0, 1)) ? "an" : "a"} ${chicken.type}!`,
            color: 0xfff000,
            fields: [
                {
                    name: "LVL",
                    value: chicken.lvl
                },
                {
                    name: "HP",
                    value: chicken.hp
                },
                {
                    name: "ATK & DEF",
                    value: chicken.atk + " | " + chicken.def,
                    inline: true
                },
                {
                    name: "SPD & LUCK",
                    value: chicken.spd + " | " + chicken.luck
                },
                
            ],
            footer: { text: `egg: ${egg}% | result: ${chicken}`}
        }
        await i.reply({ embeds: [embed]});
    }
}