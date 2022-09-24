const chalk = require("chalk");

module.exports = {
    name: "ready",
    type: "public",
    async execute(client) {
    
       client.on("ready", () => {
       
          console.log(chalk.bold("[Discord]: ") + chalk.green.bold("Logged in!"));
           
          client.user.setPresence({ activities: [{ name: `/help | ${client.guilds.cache.size} server${client.guilds.cache.size > 1 ? "s" : ""}` }], status: "idle" });

       
       });
       
    }
}