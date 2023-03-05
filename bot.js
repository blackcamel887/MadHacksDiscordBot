require("dotenv").config(); //to start process from .env file
const {Client, Events, GatewayIntentBits }=require("discord.js");
const client=new Client({
    intents:[
        GatewayIntentBits.Guilds,//adds server functionality
        GatewayIntentBits.GuildMessages //gets messages from our bot.
    ]
});
client.once("ready", () =>{
    console.log("BOT IS ONLINE"); //message when bot is online
})
client.login(process.env.TOKEN);
client.on(Events.InteractionCreate, interaction => {
	console.log(interaction);
});