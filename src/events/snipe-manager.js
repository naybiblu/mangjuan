module.exports = {
  name: "snipe-manager",
  type: "public",
  async execute(client) {
    
    client.on("messageDelete", async message => {
      client.snipes.set(message.id, {...message});
    })
    .on("messageUpdate", async (old, recent) => {
      client.snipes.set(old.id, {...old});
    });
    
  }
}
