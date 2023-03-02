const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
        .setName("snipe")
        .setDescription("See the recent message from this channel."),
  permissions: [],
  type: "GuildText",
  async execute (client, i, language, guild, user) {
    
    const snipe = client.snipes.filter(s => s.guild === i.guild.id).get(i.channel.id);
    
    if (!snipe || snipe.author.bot) return i.reply({embeds: [{
      description: "There is no recent message(s) that had been deleted or edited in this channel.",
      color: 0xff0000
    }]});
    
    i.reply({embeds: [{
      author: {
        name: snipe.author.tag,
        icon_url: snipe.member.displayAvatarURL({ dynamic: true })
      },
      description: snipe.content ?? snipe.embeds.map(e => e.description).join("\n"),
      color: snipe.author.hexAccentColor,
      timestamp: new Date(snipe.timestamp).toISOString(),
      image: {
        url: snipe.media
      }
    }]});
    
  }
}
