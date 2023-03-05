const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('darren')
		.setDescription('Wassup Darren!'),
	async execute(interaction) {
		await interaction.reply('HEHEHEHAW!');
	},
};