module.exports = {
    name: "error",
    type: "public",
    async execute (client) {
    
        client.on("error", (err) => {
            console.error(err);
            });
    
    }
}