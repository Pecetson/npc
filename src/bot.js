const { Client, Collection, Intents } = require('discord.js');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

// new Client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	}
	else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// on function goes async and arrow.
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	if (interaction.user.bot) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	}
	catch (error) {
		console.error(error);
		console.log(`The user who broke it: ${interaction.user.tag}`);
		await interaction.reply({ content: 'There was an error while executing this command.', ephemeral: true });
	}

});

// client.on('message', async message => {
// 	if (!message.startsWith('!')) return;
//
// 	const msgCmd = message;
// });

// Login to Discord
client.login(process.env.DISCORD_BOT_TOKEN);
