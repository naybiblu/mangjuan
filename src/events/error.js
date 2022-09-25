const chalk = require("chalk");

module.exports = {
    name: "error",
    type: "public",
    async execute (client) {
    
        client.on("error", (err) => {
            console.log(chalk.bold("[Discord]: ") + chalk.red.bold("Catched error from the API:"));
            console.error(err);
            });
    
        process.on('uncaughtException', (err, origin) => {

  console.log(chalk.bold("[NodeJs]: ") + chalk.red.bold(`Malfunctioned from ${origin}:`));
            console.error(err);

})

process.on("unhandledRejection", (reason, p) => {

  console.log(chalk.bold("[NodeJs]: ") + chalk.red.bold(`Promise ${p} unhandled due to:`));
            console.error(reason);

})

process.on("uncaughtExceptionMonitor", (err, origin) => {

  console.log(chalk.bold("[NodeJs]: ") + chalk.red.bold(`Malfunctioned from ${origin}:`));

            console.error(err);

});
        
        console.log(chalk.bold("[NodeJs]: ") + chalk.green.bold("Placed error-proof events."));
    }
}