module.exports = {
   name: "verify",
   aliases: ["v"],
   servers: [1],
   async execute (client, message, args) {
   
       const verifyE = {
           title: "🚨 Alternative Verification",
           description: "Click the button below for immediate verification while waiting for the CAPTCHA verification to work.",
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