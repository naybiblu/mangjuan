module.exports = {
    data: {
        name: "settings",
        description: "Changes your guild\'s settings.",
        options: [
            {

                    
                        name: "language",
                        description: "List of languages supported.",
                        type: 3,
                        required: false,
                        choices: [
                            {
                                name: "English",
                                value: "en"
                            },
                            {
                                name: "Filipino",
                                value: "tl"
                            }
                        ]
                    },
            
        ]
    },
    permissions: ["Administrator"],
    type: "GuildText",
    async execute(client, i, language, guild, user) {
        
        const lang = i.options.getString("language");
        
        await client.schemas.get("guild").updateOne({ guildId: i.guild.id }, { $set: { "settings.language": lang } });
        
        await i.reply({ content: lang === "en" ? "Language is now set to **English**!" : "Magsasalita na ako ng **Tagalog**, from now on!", ephemeral: true });
        
    }
}