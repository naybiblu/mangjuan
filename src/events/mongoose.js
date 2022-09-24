const mongo = require("mongoose");
const chalk = require("chalk");
require("dotenv").config();

module.exports = {
    name: "mongoose",
    type: "public",
    async execute(client) {
        
        mongo.connect(`mongodb+srv://Iamsuperv_15:${process.env.mongoUname}@mangjuan.wwu5pls.mongodb.net/?retryWrites=true&w=majority`);

		mongo.Promise = global.Promise;
        
        mongo.connection.on('connected', () => { 		
           console.log(chalk.bold("[Mongoose]: ") + chalk.green.bold('Connection established!'));
      })
      .on('disconnected', () => {
            console.log(chalk.bold("[Mongoose]: ") + chalk.yellow.bold('Disconnected. Waiting for reconnection...'));
      })
      .on('error', (err) => {
            console.log(chalk.bold("[Mongoose]: ") + chalk.red.bold("Cannot establish connection due to:"));
            console.error(err);
      });
        
    }
}