const { REST, Routes } = require("discord.js");
const fs = require("fs");
const chalk = require("chalk");
require("dotenv").config();

module.exports = {
   name: "command-deployer",
   type: "public",
   async execute(client) {
   
      const commands = [];
      const comFiles = fs.readdirSync("./src/commands/").filter(file => file.endsWith(".js"));
      const guildId = "880069748740735026";
       
      for (com of comFiles) {
          
          const slash = require(`./../commands/${com}`);
          
          commands.push(["beg", "settings", "test"].includes(slash.data?.name) ? slash.data : slash.data.toJSON());
          
      }
       
      const rest = new REST({ version: '10' }).setToken(process.env.dcToken);
          
          try {

		console.log(chalk.bold("[Discord REST]: ") + chalk.yellow.bold(`Deploying ${commands.length} slash command${commands.length > 1 ? "s" : ""}...`));
 

		rest.put(

			Routes.applicationGuildCommands("874325413927739392", guildId),

			{ body: commands },

		).then(data => {

		console.log(chalk.bold("[Discord REST]: ") + chalk.green.bold(`Succesfully deployed ${data.length} slash command${commands.length > 1 ? "s" : ""}!`));
		});
	} catch (error) {

		console.log(chalk.bold("[Discord REST]: ") + chalk.red.bold("Failed deploying slash command(s) due to:"));
        console.error(error);

	}
   
   }
}
