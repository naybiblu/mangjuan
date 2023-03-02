const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
        .setName("kick")
        .setDescription("Kick someone\'s ass out of the server.")
        .addUserOption(o => o
          .setName("user")
          .setDescription("The target of this action.")
          .setRequired(true)),
  permissions: ["ModerateMembers", "KickMembers"],
  type: "GuildText",
  async execute (client, i, language, guild, user) {
    
    const target = i.options.getUser("user");
    const member = i.guild.members.resolve(target);
    
    member.kick();
    i.reply({embeds: [{
      description: `🦶 **${member.user.tag}** had been kicked out of the server!`,
      color: 0xffff00
    }]});
    
  }
}
