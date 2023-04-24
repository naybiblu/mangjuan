const { Captcha } = require("captcha.gif");
const { AttachmentBuilder} = require("discord.js");

module.exports = {
   name: "button-interaction",
   type: "public",
   async execute (client) {
       
       client.on("interactionCreate", async i => {
           
           if (!i.isButton()) return;
           
           // DHA's verify button
           if (i.customId === "vDHA") {
             console.log("hi")
              if (i.member.roles.cache.has("1013333281065930792")) return i.reply({ content: "Homeowner ka na kaya! Tsupe!", ephemeral: true });
               
              console.log("hi")
              await i.reply({ content: "Please check my DM as part of this server\'s verification process.", ephemeral: true });
          
              const captcha = new Captcha();
              const { token: pwd, buffer } = captcha.generate();
              const file = new AttachmentBuilder(buffer, { name: 'verify.png' });
              const captchaE = {
                  title: "🛎️  One CAPTCHA coming up!",
                  color: 0xffa500,
                  description: `Kindly type the __**capital letters**__ below __**from left to right**__. Please mind the sensitivity of the CAPTCHA.\n\n**Error?** Try another CAPTCHA by clicking the **[verify button](${i.message.url})** in the server channel.`,
                  image: {
                     url: "attachment://verify.png"
                  }
              };
              
             return i.user.send({ embeds: [captchaE], files: [file] }).then(dm => {
              const filter = f => f.content === pwd;
              dm.channel.awaitMessages({ filter, idle: 60000, max: 1 }).then(answer => {
              dm.channel.send({ embeds: [{ description:`You are now an official member of the association! Start being a good homeowner **[here](https://discord.com/channels/1007631548805283922/1014553798422839306)**.`, color: 0xfff000 }] });
              i.member.roles.add("1013333281065930792");
              });
              });
               
           
           }
           
       });
       
   }
}
