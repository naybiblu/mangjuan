module.exports = {
  name: "snipe-manager",
  type: "public",
  async execute(client) {
    
    client.on("messageDelete", async message => {
      client.snipes.set(message.id, {...message, 
        authorIcon: message.member.displayAvatarURL({dynamic: true}), 
        guild: message.guild.id, 
        channel: message.channel.id,
        message: message.content
      });
    })
    .on("messageUpdate", async (old, recent) => {
      client.snipes.set(old.id, {
        ...old, 
        authorIcon: old.member.displayAvatarURL({dynamic: true}), 
        guild: old.guild.id, 
        channel: old.channel.id,
        message: old.content
      });
    });
    
  }
}
