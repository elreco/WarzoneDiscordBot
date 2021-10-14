const { Command } = require('discord-akairo');
const API = require('call-of-duty-api')();

class PingCommand extends Command {
    constructor() {
        super('stats', {
            aliases: ['stats'],
            args: [
                {
                    id: 'player'
                }
            ]
        });
    }

    async exec(message, args) {
        try {
            let data = await API.MWwz(args.player, 'psn')
            console.log(data)
            return message.reply(data.username);
        } catch (Error) {
            console.log(args.player)
            return message.reply(Error);
        }
    }
}

module.exports = PingCommand;