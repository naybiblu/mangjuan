module.exports = {
    chanTypeInt: function(string) {
        switch (string) {
                case "GuildText": return 0;
                case "DM": return 1;
                case "GuildVoice": return 2;
                case "GroupDM": return 3;
                case "GuildCategory": return 4;
                case "GuildAnnouncement": return 5;
                case "AnnouncementThread": return 10;
                case "PublicThread": return 11;
                case "PrivateThread": return 12;
                case "GuildStageVoice": return 13;
                case "GuildDirectory": return 14;
                case "GuildForum": return 15;
        }
    },
    guildDefiner: function(array) {
        let newArr = [];
        array.forEach(int => {
        switch (int) {
            case 0: newArr.push("880069748740735026"); // BNKK
            case 1: newArr.push("1007631548805283922"); // DHA
        }
        });
        return newArr;
    },
    randInt: function(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}
}