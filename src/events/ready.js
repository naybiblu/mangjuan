const chalk = require("chalk");

module.exports = {
    name: "ready",
    type: "public",
    async execute(client) {
    
       client.on("ready", () => {
       
          console.log(chalk.bold("[Discord]: ") + chalk.green.bold("Logged in!"));
           
          client.user.setPresence({ activities: [{ name: `/help | ${client.guilds.cache.size} server${client.guilds.cache.size > 1 ? "s" : ""}` }], status: "idle" });

          client.channels.fetch('880834479453777920').then(memCount => memCount.edit({name: `Hausmeyts: ${client.guilds.cache.get('880069748740735026').memberCount}`})).catch(err => console.log(err));
       });
       
    }
}
