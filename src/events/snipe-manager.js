module.exports = {
  name: "snipe-manager",
  type: "public",
  async execute(client) {
    
    client.on("messageDelete", async message => {
      client.snipes.set(message.channel.id, {
        content: message.content,
        author: message.author,
        member: message.member,
        embeds: message.embeds,
        guild: message.guild.id,
        timestamp: message.createdTimestamp
      });
    })
    .on("messageUpdate", async (old, recent) => {
      client.snipes.set(old.channel.id, {
        content: old.content,
        author: old.author,
        member: old.member,
        embeds: old.embeds,
        guild: old.guild.id,
        timestamp: old.createdTimestamp
      });
    });
    
  }
}
