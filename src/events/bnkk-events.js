module.exports = {
  name: "bnkk-events",
  type: "public",
  async execute(client) {
    
    const chanId = '880069748740735029';
    client.on("guildMemberAdd", async member => {
    
      if (!member) return;
      if (member.guild.id !== guild) return;
    
      const welcomeMsgs = [
          `It\'s a plane. It\'s a bird. No, it\'s <@${member.user.id}>!`,
          `May naaamoy akong mabaho... si <@${member.user.id}>!`,
          `Naghahanap ng ka-discord love si <@${member.user.id}>, oh! Sino raw pwede???`,
          `Kotse ka ba, <@${member.user.id}>? Kasi pwede kang i-dismantle, eh, hahahahaha, darc joke...`,
          `Who\'s that pokemon??? It\'s <@${member.user.id}>!`,
          `Uy, hello sa\'yo, hausmeyt <@${member.user.id}>! Welcome sa aking bahay!`,
          `Alam mo ba, <@${member.user.id}>, si ano raw nag-anuhan daw. Gagi, fr fr! dswd!`,
          `Wala na akong maisip na pang-welcome message. \'Eto na lang, <@${member.user.id}>.`,
          `Sino kaya pumasok??? hahahaha check niyo na lang sa in-and-out channel, mga staffs.`
        ];
      const random = Math.floor(Math.random() * welcomeMsgs.length);
      client.channels.fetch(chanId).then(channel => {
        channel.send(welcomeMsgs[random]);
      }).catch(err => console.log(err));
    
      // for in-and-out channel
      client.channels.fetch('945629770694144000').then(logs => logs.send(`🟢 Nakapasok na si ${member.user}... (the **\`${member.guild.memberCount}th\`**)`)).catch(err => console.log(err));
    
      // editing number of members vc
    
      client.channels.fetch('880834479453777920').then(memCount => memCount.edit({ name: `Hausmeyts: ${member.guild.memberCount}` })).catch(err => console.log(err));
    
    })
    .on("guildMemberRemove", async (member) => {
      if (!member) return;
		if (member.guild.id !== guild) return;
    
    const byeMsgs = [
      `Aguy, umalis si **${member.user.tag}**. Grabe ka naman, ludi... sobra ka na.`,
      `RIP **${member.user.tag}**. Press F to pay respect.`,
      `Akala ko pa naman na pang-happily-ever-after si **${member.user.tag}**... \'di naman pala.`,
      `I\'m sorry pero evicted ka na sa aking bahay, **${member.user.tag}**. *\*Moira sings*`,
      `Pasensiya na, **${member.user.tag}**... \'e-eto lang ako. *\*Sinuntok eung pader*`,
      `**${member.user.tag}** 😭👉⚰️⚱️🏺💣`,
      `> *Minsan, kailangan mong umalis para malaman mo kung sino ka talaga... ano raw? hahahaha.* —**${member.user.tag}**`,
      `Staffs, may umalis pero \'di ko sasabihin, ahahahaha. Ano kayo gold, hahahahaha...'`
    ];
    const random = Math.floor(Math.random() * byeMsgs.length);
    client.channels.fetch(chanId).then(channel => {
				channel.send(byeMsgs[random]);
			}).catch(err => console.log(err));

    // for in-and-out channel
    client.channels.fetch('945629770694144000').then(logs => logs.send(`🔴 Umalis si **${member.user.tag}**... (Hausmeyts left: **\`${member.guild.memberCount}\`**)`)).catch(err => console.log(err));

    // editing number of members vc

    client.channels.fetch('880834479453777920').then(memCount => memCount.edit({name: `Hausmeyts: ${member.guild.memberCount}`})).catch(err => console.log(err));
    })
    
  }
}
