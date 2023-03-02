const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
        .setName("unban")
        .setDescription("Unban someone on the server.")
        .addUserOption(o => o
          .setName("user")
          .setDescription("The target of this action.")
          .setRequired(true)),
  permissions: ["ModerateMembers", "BanMembers", "KickMembers"],
  type: "GuildText",
  async execute (client, i, language, guild, user) {
    
    const target = i.options.getUser("user");
    const name = target.tag;
    
    i.guild.bans.remove(target);
    i.reply({embeds: [{
      description: `🦶 **${name}** had been banned on the server!`,
      color: 0xffff00
    }]});
    
  }
}
