require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('messageCreate', (message) => {
    if (message.content === '!ping') {
        message.channel.send('pong!');
    }
    elif (message.content === '!die') {
        message.channel.send('in hell. RIP');
    }
});

client.login(process.env.DISCORD_TOKEN);
