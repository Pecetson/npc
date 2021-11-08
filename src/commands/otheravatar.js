const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data:new SlashCommandBuilder()
		.setName('avatarof')
		.setDescription('Shows other\'s avatars!')
		.addUserOption(option => option.setName('user').setDescription('The user').setRequired(true)),

	async execute(interaction) {
		const mentionedUser = interaction.options.getUser('user');
		const embed = new MessageEmbed()
			.setTitle(`${mentionedUser.tag}'s avatar:`)
			.setImage(mentionedUser.displayAvatarURL())
			.setDescription(`URL: ${mentionedUser.displayAvatarURL()}`)
			.setFooter('わっしょい！')
			.setColor([255, 165, 0]);
		await interaction.reply({ embeds: [embed] });
	},
};
