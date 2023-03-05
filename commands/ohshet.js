const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ohshet')
		.setDescription('ohshet'),
	async execute(interaction) {
		await interaction.reply('https://images-ext-2.discordapp.net/external/FPga7VIWmyCaQ7tc3_0VU57HbiQ83THiHjl7QpwLyuU/https/media.tenor.com/apns_8-5xl8AAAPo/huh-verne.mp4');
	},
};