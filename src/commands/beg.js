const { randInt } = require("./../../utils/regular-functions.js");

module.exports = {
    data: {
       name: "beg",
       description: "Get free money from the streets.",
       options: [
       {
           name: "area",
           description: "Places you can go for begging.",
           type: 3,
           required: true,
           choices: [
               {
                   name: "ManilaBayFilledWithDolomiteSand",
                   value: "area0",
               },
               {

                   name: "Malacañang Palace",

                   value: "area1",

               },
               {

                   name: "Tondo",

                   value: "area2",

               },
               {

                   name: "Mall of Asia",

                   value: "area3",

               },
               {

                   name: "Bonifacio Global Center",

                   value: "area4",

               }
               ]
       }
       ]
    },
    permissions: [],
    type: "GuildText",
    async execute (client, i, language, guild, user) {
        
        const area = i.options.getString("area");
        const coin = randInt(0, 100);
        let begStat = {
            money: 0,
            area: undefined,
            status: undefined
        };
        
        switch (area) {
            case "area0": begStat.money = coin < 60 && coin >= 0 ? randInt(0, 20) : randInt(5, 45); begStat.area = "ManilaBayFilledWithDolomiteSand"; break; // Manila Bay
            case "area1": begStat.money = coin < 80 && coin >= 0 ? randInt(0, 25) : randInt(30, 70); begStat.area = "Malacañang Palace"; break; // Malacañang
            case "area2": begStat.money = coin < 50 && coin >= 0 ? randInt(0, 100) : randInt(0, 100); begStat.area = "Tondo, Manila"; begStat.status = coin < 50 && coin >= 0 ? "inflicted" : undefined; break; // Tondo; 1st: - (saksak) || 2nd: +
             case "area3": begStat.money = coin < 40 && coin >= 0 ? -(randInt(0, 15)) : randInt(0, 60); begStat.area = "Mall of Asia"; break; // Mall of Asia
             case "area4": begStat.money = coin < 20 && coin >= 0 ? randInt(20, 35) : randInt(10, 125); begStat.area = "Bonificio Global Center"; // BGC
        }
        
        await client.schemas.get("user").updateOne({ userId: i.user.id }, { money: { $add: ["$money", begged] } });
        
        const begResultEn = {
            title: `You begged at ${begStat.area}!`,
            description: `You got ${guild.settings.currency + begStat.money}. Total: ${guild.settings.currency + (user.money + begStat.money)}.`
            
        };
        
        const begResultTl = {

            title: `Nanlimos ka sa ${begStat.area}!`,

            description: `Nakakuha ka ng ${guild.settings.currency + begStat.money}. Total: ${guild.settings.currency + (user.money + begStat.money)}.`

            

        };
        
        await i.reply({embeds: [language === "en" ? begResultEn : begResultTl]});
        
        }
}