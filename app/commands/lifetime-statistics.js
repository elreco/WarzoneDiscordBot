const { Command } = require('discord-akairo');
const API = require('call-of-duty-api')();

class PingCommand extends Command {
    constructor() {
        super('stats', {
            aliases: ['stats'],
        });
    }

    async exec(message) {
        try {
            let data = await API.MWmp(message)
            console.log(data)
            return message.reply(data);
        } catch (Error) {
            return message.reply(Error);
        }
    }
}

module.exports = PingCommand;