const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
        .setName("unmute")
        .setDescription("Unmute someone on the server.")
        .addUserOption(o => o
          .setName("user")
          .setDescription("The target of this action.")
          .setRequired(true)),
  permissions: ["ModerateMembers"],
  type: "GuildText",
  async execute (client, i, language, guild, user) {
    
    const target = i.options.getUser("user");
    
    if (!target.isCommunicationDisabled()) return i.reply({embeds: [{
        description: "❎ The user you specified has been unmuted!",
        color: 0xff0000
      }]});
    
    i.guild.members.resolve(target).timeout(0);
    i.reply({embeds: [{
      description: `✅ **${target.tag}** had been unmuted!`,
      color: 0xffff00
    }]});
    
  }
}
