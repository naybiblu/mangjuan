const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
        .setName("role")
        .setDescription("Set or remove a certain role from someone.")
        .addSubcommand(sc => sc
          .setName("remove")
          .setDescription("Remove a role from someone.")
          .addUserOption(o => o
            .setName("user")
            .setDescription("The target of this action.")
            .setRequired(true))
          .addRoleOption(o => o
            .setName("role")
            .setDescription("Role to be removed from someone.")
            .setRequired(true)))
        .addSubcommand(sc => sc
          .setName("add")
          .setDescription("Add a role from someone.")
          .addUserOption(o => o
            .setName("user")
            .setDescription("The target of this action.")
            .setRequired(true))
          .addRoleOption(o => o
            .setName("role")
            .setDescription("Role to be added from someone.")
            .setRequired(true))),
  permissions: ["ModerateMembers", "BanMembers", "KickMembers"],
  type: "GuildText",
  async execute (client, i, language, guild, user) {
    
    const subcommand = i.options.getSubcommand();
    const role = i.options.getRole("role");
    const target = i.options.getUser("user");
    const roles = i.guild.members.resolve(target).roles;
    
    switch (subcommand) {
      case "remove": roles.remove(role); break;
      default: roles.add(role);
    }
    
    i.reply({embeds: [{
      description: `✅ **${role.name}** had been ${subcommand}${subcommand.includes("add") ? "ed" : "d"} from ${target}!`,
      color: 0xffff00
    }]});
    
  }
}
