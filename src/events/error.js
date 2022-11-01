const chalk = require("chalk");

module.exports = {
    name: "error",
    type: "public",
    async execute (client) {
    
        const dev = await client.users.fetch("580201260704071711");
        function embedBuilder(title, err, origin) {
          dev.send({
            embeds: [{
              title: `⚠️ ${title}`,
              description: `\`\`\`\n${err}\n${!origin ? null : origin}\`\`\``,
              color: 0xff0000
            }]
          });
        }
        
        client.on("error", (err) => {
            console.log(chalk.bold("[Discord]: ") + chalk.red.bold("Catched error from the API:"));
            console.error(err);
            embedBuilder("[Discord] Error", err);
            });
    
        process.on('uncaughtException', (err, origin) => {

            console.log(chalk.bold("[NodeJs]: ") + chalk.red.bold(`Malfunctioned from ${origin}:`));
            console.error(err);
            embedBuilder("[NodeJS] Uncaught Exception", err, origin);

})

process.on("unhandledRejection", (reason, p) => {

  console.log(chalk.bold("[NodeJs]: ") + chalk.red.bold(`Promise ${p} unhandled due to:`));
            console.error(reason);
            embedBuilder("[NodeJS] Unhandled Rejection", p, reason);
})

process.on("uncaughtExceptionMonitor", (err, origin) => {

  console.log(chalk.bold("[NodeJs]: ") + chalk.red.bold(`Malfunctioned from ${origin}:`));

            console.error(err);
            embedBuilder("[NodeJS] Uncaught Exception Monitor", error, origin);
});
        
        console.log(chalk.bold("[NodeJs]: ") + chalk.green.bold("Placed error-proof events!"));
    }
}
