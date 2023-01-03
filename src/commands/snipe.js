const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
        .setName("snipe")
        .setDescription("See the recent message from this channel."),
  permissions: [],
  type: "GuildText",
  async execute (client, i, language, guild, user) {
    
    const snipe = client.snipes.first();
    
    if (!snipe) return i.reply({embeds: [{
      description: "There is no recent message(s) that had been deleted or edited in this server.",
      color: 0xff0000
    }]});
    
    i.reply({embeds: [{
      author: {
        name: snipe.author.tag,
        icon_url: snipe.authorIcon
      },
      description: snipe.content,
      color: snipe.author.hexAccentColor,
      timestamp: new Date(snipe.createdTimestamp).toISOString()
    }]});
    
  }
}
