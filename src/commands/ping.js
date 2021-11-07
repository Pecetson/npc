const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('pong?'),
	async execute(interaction) {
		await interaction.reply(`~~Nya!~~ I-i mean Pong!\nMy ping: ${Date.now() - interaction.createdTimestamp}`);
	},
};
