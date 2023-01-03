const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
        .setName("role")
        .setDescription("Set or remove a certain role from someone.")
        .addSubcommand(sc => sc
          .setName("remove")
          .setDescription("Remove a role from someone.")
          .addRoleOption(o => o
            .setName("role")
            .setDescription("Role to be removed from someone.")
            .setRequired(true))
          .addUserOption(o => o
            .setName("user")
            .setDescription("The target of this action.")
            .setRequired(true)))
        .addSubcommand(sc => sc
          .setName("add")
          .setDescription("Add a role from someone.")
          .addRoleOption(o => o
            .setName("role")
            .setDescription("Role to be added from someone.")
            .setRequired(true))
          .addUserOption(o => o
            .setName("user")
            .setDescription("The target of this action.")
            .setRequired(true))),
  permissions: [],
  type: "GuildText",
  async execute (client, i, language, guild, user) {
    
    const subcommand = i.options.getSubcommand();
    const role = i.options.getRole("role");
    const target = i.options.getUser("user");
    
    switch (subcommand) {
      case "remove": i.guild.members.removeRole({ user: target, role: role }); break;
      default: i.guild.members.addRole({ user: target, role: role });
    }
    
    i.reply({embeds: [{
      description: `✅**${role.name}** had been ${subcommand}ed from ${target}!`,
      color: 0xffff00
    }]});
    
  }
}
