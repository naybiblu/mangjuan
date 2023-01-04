const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
        .setName("prune")
        .setDescription("Delete messages in one go.")
        .addNumberOption(o => o
          .setName("count")
          .setDescription("Number of messages needed to be deleted")
          .setRequired(true))
        .addUserOption(o => o
          .setName("user")
          .setDescription("The target of this action.")),
  permissions: ["ModerateMembers"],
  type: "GuildText",
  async execute (client, i, language, guild, user) {
    
    const target = i.options.getUser("user");
    const count = i.options.getNumber("count");
    const messages = await i.channel.messages.fetch({
      limit: count,
      cache: false
    });
    
    if (target) messages = messages.filter(m => m.author === target);
    
    i.channel.bulkDelete(messages, true);
    i.reply({embeds: [{
      description: `✅ **${count}** messages ${target ? `from **${target.tag}**` : ""} had been deleted on this channel!`,
      color: 0xffff00
    }]});
    
  }
}
