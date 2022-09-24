module.exports = {
   name: "button-interaction",
   type: "public",
   async execute (client) {
       
       client.on("interactionCreate", async i => {
           
           if (!i.isButton()) return;
           
           // DHA's verify button
           if (i.customId === "vDHA") {
              if (i.member.roles.cache.has("1013333281065930792")) return i.reply({ content: "Homeowner ka na kaya! Tsupe!", ephemeral: true });
               i.member.roles.add("1013333281065930792");
               await i.reply({ content: "You are now an official homeowner/member of the association!", ephemeral: true }); 
               
           }
           
       });
       
   }
}