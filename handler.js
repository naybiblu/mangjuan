const Discord = require("discord.js");
require("dotenv").config();
const fs = require("fs");

const client = new Discord.Client({
   intents: [ "Guilds", "GuildMessages", "DirectMessages", "GuildMembers", "GuildVoiceStates", "GuildPresences", "MessageContent" ],
   partials: [ Discord.Partials.Channel, Discord.Partials.User ],
   allowedMention: [ "users" ]
});

// INITIALIZING COLLECTIONS AND OTHER OBJECTS
client.commands = new Discord.Collection();
client.schemas = new Discord.Collection();

// SETTING SLASH COMMANDS
const commands = fs.readdirSync(__dirname + '/src/commands/').filter(file => file.endsWith('.js'));

for (const command of commands) {
    
    const slash = require(__dirname + `/src/commands/${command}`);
    client.commands.set(slash.data.name, slash);
    
    }

// GETTING SERVER-CENTERED COMMANDS
const serverComs = fs.readdirSync(__dirname + '/src/server-specific/').filter(file => file.endsWith(".js"));

for (const sC of serverComs) {
    
    const command = require(__dirname + `/src/server-specific/${sC}`);

    client.commands.set(command.name, command);
    
}

// GETTING EVENTS
const eventFolder = fs.readdirSync(__dirname + "/src/events/").filter(file => file.endsWith('.js'));

for (const events of eventFolder) {

const event = require(__dirname + `/src/events/${events}`);
  //if (event.type === "public") {

event.execute(client);

  /*} else {

    const guild = '880069748740735026';

    event.execute(client, guild);

  }*/

}

// LOGGING-IN TO DISCORD API
client.login(process.env.dcToken);