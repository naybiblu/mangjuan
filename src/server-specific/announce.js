module.exports = {
    name: "announce",
    aliases: ["an"],
    servers: [1],
    async execute (client, message, args) {

    const action = args.slice(0, 1).toString();

    const msgId = args.slice(1, 2).toString();

    const chanId = "1013427520168804392";

    let embed = {

      title: undefined,

      color: 0xfff000,

      description: undefined,

      image: undefined,

      footer: undefined 

    };

    let content;

    let announcement;

    if (!action) return message.channel.send("🔴 **|** Specify what do you want to do...\n\`\`\`\n1 — make announcement\n2 — edit announcement\`\`\`");

      if (action === "1") {

        embedEditor("1");

      } else if (action === "2") {

      if (!msgId) return message.channel.send("🔴 **|** Please add the message ID you want to edit...");

        embedEditor("2");

      }

    function embedEditor(act) {

      const verb = act === "1" ? "give" : "edit";

      if (act === "2") {

        client.channels.fetch(chanId).then(a => {

          a.messages.fetch(msgId).then(e => {

          embed = e.embeds[0].data;

          content = e.content;

        })});

      }

      (async () => {

      const msg = await message.channel.send({content: `Please ${verb} the __**title**__ of announcement. Type **x** if it is not needed.`});

       if (act === "2") msg.edit({content: `${msg.content}${!content ? "" : "\n\n" + content}`, embeds: [embed]});

    

      message.channel.awaitMessages({max: 1, time: 60000, errors: ['time', 'max']}).then(async title => {

        embed.title = title.first().content.toLowerCase() === "x" ? undefined : title.first().content;

        const msg2 = await message.channel.send({content: `Please ${verb} the __**description**__ of announcement. This is required.`});

        if (title.first().content.toLowerCase() !== "x") msg2.edit({content: `${msg2.content}${!content ? "" : "\n\n" + content}`, embeds: [embed]});

      message.channel.awaitMessages({max: 1, time: 60000, errors: ['time', 'max']}).then(async desc => {

          embed.description = desc.first().content;

          await message.channel.send({content: `Please ${verb} the __**imagery**__ of announcement. Provide a link of a picture, the file itself, or **x** if not needed.${!content ? "" : "\n\n" + content}`, embeds: [embed]});

          message.channel.awaitMessages({max: 1, time: 60000, errors: ['time', 'max']}).then(async img => {

            const file = img.first().content.toLowerCase();

            const pic = img.first().attachments?.first();

            

            embed.image = { url: pic ? pic.url.toString() : file === "x" || !file.startsWith("https://")  ? undefined : img.first().content };

            await message.channel.send({content: `Please ${verb} the __**footer**__ of announcement. Type **x** if not needed.${!content ? "" : "\n\n" + content}`, embeds: [embed]});

            message.channel.awaitMessages({max: 1, time: 60000, errors: ['time', 'max']}).then(async footer => {

              embed.footer = { text: footer.first().content.toLowerCase() === "x" ? undefined : footer.first().content };

              await message.channel.send({content: `Please ${verb} the __**content**__ of announcement. Type **x** if not needed.${!content ? "" : "\n\n" + content}`, embeds: [embed]});

              message.channel.awaitMessages({max: 1, time: 60000, errors: ['time', 'max']}).then(async cont => {

                content = cont.first().content.toLowerCase() === "x" ? undefined : cont.first().content;    

                client.channels.fetch(chanId).then(async a => {

                  a.messages.fetch(msgId).then(async e => {

msg.delete();

                      if (act === "1") {

                      announcement = await a.send({content: content, embeds: [embed]});

                    } else {

                    e.edit({content: content, embeds: [embed]});

                        announcement = e;

                      }

                  const success = {

                  color: 0xfff000,

                  description: `✅ **|** Your announcement has been ${act === "1" ? "created" : "edited"}! See it **[here](${announcement.url})** or look at the preview above!`

                };

message.channel.send({embeds: [success]});

                  })});

                                  

                message.channel.send({content: content, embeds: [embed]});

                

              }) // content

            }) // footer text

          }) // image url

        }) // desc

      }) // title

                          })();

    }

    

  }

}