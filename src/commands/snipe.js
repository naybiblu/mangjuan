const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
        .setName("snipe")
        .setDescription("See the recent message from this channel."),
  permissions: [],
  type: "GuildText",
  async execute (client, i, language, guild, user) {
    
    const snipe = client.snipes.first();
    console.log(snipe.author)
    
    i.reply({embeds: [{
      author: {
        name: snipe.author.tag
      },
      description: snipe.content,
      color: snipe.author.hexAccentColor,
      timestamp: new Date(snipe.createdTimestamp).toISOString()
    }]});
    
  }
}
