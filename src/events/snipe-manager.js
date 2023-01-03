module.exports = {
  name: "snipe-manager",
  type: "public",
  async execute(client) {
    
    client.on("messageDelete", async message => {
      client.snipes.set(message.id, {...message});
    })
    .on("messageUpdated", async (old, new) => {
      client.snipes.set(old.id, {...old});
    });
    
  }
}
