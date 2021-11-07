const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
// new Client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
// Applies only once when the bot is ready.
client.once('ready', () => {
	console.log('Pecet logged in!');
});
// on function goes async and arrow.
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply(`Pong!\nMy ping: ${Date.now() - interaction.createdTimestamp}`);
	}
	else if (commandName === 'server') {
		await interaction.reply(`Server: ${interaction.guild.name}\nMember Count: ${interaction.guild.memberCount}`);
	}
	else if (commandName === 'user') {
		await interaction.reply('');
	}
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_BOT_TOKEN);
