module.exports = {
    name: "eval",
    aliases: ["e"],
    servers: [0, 1],
    async execute (client, message, args) {
    const arg = args.join(" ");
    eval(arg);
    }
}