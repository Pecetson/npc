const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('pong?'),
	async execute(interaction) {

		const embed = new MessageEmbed()
			.setTitle('Pong!')
			.setFooter('わっしょい！')
			.setDescription('Pinging!')
			.setColor([255, 165, 0]);

		console.log('pinging...');
		console.log(`${Date.now() - interaction.createdTimestamp}ms`);
		embed.addField('My ping:', `${Date.now() - interaction.createdTimestamp}ms`);
		await interaction.reply({ embeds: [embed] });
	},
};
