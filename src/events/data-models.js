const mongo = require("mongoose");

module.exports = {
    name: "data-models",
    type: "public",
    async execute (client) {
    
    // guild settings & etc.
    const guildSchema = new mongo.Schema({ 
        guildId: { type: String, require: true, unique: true },
        settings: {
            robMode: { type: Boolean, default: false },
            currency: { type: String, default: "₱" },
            language: { type: String, default: "en" }
        }
    });
    const one = mongo.model("guild", guildSchema);
    client.schemas.set("guild", one);
  
        
    // user's data
    const userSchema = new mongo.Schema({ 

        userId: { type: String, require: true, unique: true },
        money: { type: Number, default: 500 },
        inventory: Array,
        stats: Array,
        chickens: Array,
        status: {
            antiRob: Boolean,
            banned: Boolean,
            lucky: Boolean,
            onVacation: Boolean
        }

    });
    const two = mongo.model("user", userSchema);
    client.schemas.set("user", two);
    
    }
}