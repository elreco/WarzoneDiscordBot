const { AkairoClient } = require('discord-akairo');
const config = required('config.js')

class MyClient extends AkairoClient {
    constructor() {
        super({
            ownerID: config.ownerID,
        }, {
            // Options for discord.js goes here.
        });
    }
}

const client = new MyClient();
client.login(config.discordToken);