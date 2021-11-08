const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data:new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Shows your avatar!'),

	async execute(interaction) {
		const embed = new MessageEmbed()
			.setTitle(`${interaction.user.tag}'s avatar:`)
			.setImage(interaction.user.displayAvatarURL())
			.setDescription(`URL: ${interaction.user.displayAvatarURL()}`)
			.setFooter('わっしょい！')
			.setColor([255, 165, 0]);
		await interaction.reply({ embeds: [embed] });
	},
};
