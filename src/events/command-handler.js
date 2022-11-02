const { chanTypeInt, guildDefiner } = require("./../../utils/regular-functions.js");

module.exports = {
   name: "command-handler",
   type: "public",
   async execute (client) {
         
       client.on("interactionCreate", async i => {
       
          if (!i.isChatInputCommand()) return;
           
          const guildSettings = client.schemas.get('guild');
          const userModel = client.schemas.get('user');
          
          const guild = await guildSettings.findOne({ guildId: i.guild.id });
          const user = await userModel.findOne({ userId: i.user.id });
          
          // creating guild & user data
          if (!guild) await guildSettings.create({ guildId: i.guild.id });
          if (!user) await userModel.create({ userId: i.user.id, inventory: [ { name: "NSO Birth Certificate", id: "nsoBC", qty: 1 } ]});
          
          
         const language = guild?.settings?.language;
	     const command = client.commands.get(i.commandName);
    
    try {
        
        if (!command) return;
        if (!i.member.permissions.has(command.permissions)) return;
        if (i.channel.type !== chanTypeInt(command.type)) return;
        
        await command.execute(client, i, language, guild, user);
        
     } catch (err) {
         
        console.error(err);
        await i.reply({ content: "Something went south when executing this command!", ephemeral: true });
         
     }
          
  
      })
    .on("messageCreate", async message => {
          
          const prefix = "hoy!";
          
          if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;
          
          const args = message.content.slice(prefix.length).split(/ +/);

	const commandName = args.shift().toLowerCase().replace(/\s+/g, "");

	const command = client.commands.get(commandName) || client.commands.find(a => a.aliases && a.aliases.includes(commandName));

	 if (!command) return;
     
     if (!guildDefiner(command.servers).includes(message.guild.id)) return;
     if (guildDefiner(command.servers).includes("880069748740735026") && message.author.id !== "580201260704071711") return;
          
     command.execute(client, message, args);
          
    })
   
   }
}
