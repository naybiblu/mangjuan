module.exports = {
    name: "eval",
    aliases: ["e"],
    servers: [0, 1],
    async execute (client, message, args) {
      const arg = args.join(" ");
      
      if (!arg.startsWith("\`\`\`js") && !arg.endsWith("\`\`\`")) return message.channel.send({embeds: [{
          description: "⚠️ **|** Evaluate code within code block format please! JavaScript is only accepted to be evaluated.",
          color: 0xff0000
      }]});
      
      eval(arg.replace("\`\`\`js", "").replace("\`\`\`", ""));
    }
}
