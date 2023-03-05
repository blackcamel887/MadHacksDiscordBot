const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fire')
		.setDescription('fire'),
	async execute(interaction) {
		await interaction.reply(':fire:');
	},
};