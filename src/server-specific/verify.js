module.exports = {
   name: "verify",
   aliases: ["v"],
   servers: [1],
   async execute (client, message, args) {
   
       const verifyE = {
           title: "🚨  Verify muna, par!",
           description: "Para alam naming hindi ka bot, kailangan mong dumaan sa akin.\n\n> May ise-send ako sa\'yo na CAPTCHA sa DMs mo kapag pinindot mo \'yung button sa baba.",
           color: 3092790
       };
       const verifyB = {
           type: 1,
           components: [
               {
                   type: 2,
                   style: 3,
                   label: "Verify",
                   custom_id: "vDHA"
               }
           ]
       }
       
       message.channel.send({ embeds: [verifyE], components: [verifyB] });
       
   }
}