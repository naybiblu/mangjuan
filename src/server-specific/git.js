const { exec } = require("node:child_process");

module.exports = {
    name: "git",
    aliases: "g",
    servers: [0, 1],
    async execute (client, message, args) {
        message.channel.send({embeds: [{
            title: "🚨  Tips in using git",
            color: 0xfff000,
            description: "• To add files to staging area:\n\`\`\`bash\n$ git add .\`\`\`\n\n• To commit staged files:\n\`\`\`bash\n$ git commit -m <commit header(s)>\`\`\`\n\n• To finally push committed files to Github repository:\n\`\`\`bash\n$ git push origin master\`\`\`\n\n> **Note**: Upon using push command, Github will ask your username and PAT (Personal Authorization Token; used as password). For security, kindly use the command only and do not disclose any sensitive info whatsoever."
        }]});
        
        const arg = args.join(" ");
        
        if (args.includes("push")) {
            exec("git push origin master")
            setTimeout(() => {
                   console.log("naybiblu"); }, 1000);
                        setTimeout(() => {
                            console.log(process.env.PAT);
                              
                            }, 2000);
                   
                
            
            return;
        }
        
        exec("git" + arg, (err, stdout, stderr) => {
            message.channel.send({embeds: [{ description: `\`\`\`js\n${!stdout ? "no output" : stdout}\`\`\`` }]});
        })
    }
}