module.exports = {
    name: "servers",
    aliases: ["sv"],
    servers: [0, 1],
    async execute (client, message, args) {

    const arg = args.join(" ");

    const servers = [];

    client.guilds.cache.forEach(guild => servers.push(guild));

    

    const main = {

      color: 0xfff000,

      title: `Kuya Kim is used by ${client.guilds.cache.size} servers!`,

      description: client.guilds.cache.map(guild => `**__${guild.name}__**\n**ID**: ${guild.id}\n**Owner**: ${client.users.cache.get(guild.ownerId).tag}\n**Member Count**: ${guild.memberCount}`).join("\n\n")

    };

   if (arg > arg.length || isNaN(arg)) return;

   if (arg) {

    const guild = servers[arg];

    const serverInfo = {

      color: 0xfff000,

      title: guild.name,

      thumbnail: {

        url: guild.iconURL({dynamic: true})

      },

      description: `**ID**: ${guild.id}\n**Owner**: ${client.users.cache.get(guild.ownerId).tag}\n**Member Count**: ${guild.memberCount} members\n**Created at:** ${guild.createdAt}`

    }

   return message.channel.send({embeds: [serverInfo]});

   }

message.channel.send({embeds: [main]});

    

  }

}