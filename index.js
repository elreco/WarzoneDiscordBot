const { AkairoClient, CommandHandler } = require('discord-akairo')
const { Intents } = require('discord.js');
const config = require('./config.js')
const API = require('call-of-duty-api')();

class MyClient extends AkairoClient {
  constructor() {
    super(
      {
        ownerID: config.ownerID
      },
      {
        disableMentions: 'everyone',
        intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
      }
    )
    this.commandHandler = new CommandHandler(this, {
        directory: './app/commands/',
        prefix: config.commandPrefix
    })
    this.commandHandler.loadAll();
  }
}

const client = new MyClient()

API.login(config.codEmail, config.codPassword, config.captchaApiKey).then((output) => {
  console.log(output);
  client.login(config.discordToken)
}).catch((err) => {
   console.log(err);
});



