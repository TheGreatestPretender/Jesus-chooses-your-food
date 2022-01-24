const fs = require('fs');
const { Collection, Client, Intents } = require('discord.js');
const { prefix, token } = require('./config.json');
const express = require('express');
const { port } = require('./config.json');
const BnetStrategy = require('passport-bnet').Strategy;
const BNET_ID = process.env.BNET_ID
const BNET_SECRET = process.env.BNET_SECRET

const app = express();

app.get('/', (req, res) => {
    return res.sendFile('index.html', {root: '.'});
});
// Use the BnetStrategy within Passport.
passport.use(new BnetStrategy({
    clientID: BNET_ID,
    clientSecret: BNET_SECRET,
    callbackURL: "https://localhost:3000/auth/bnet/callback",
    region: "us"
}, function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
}));


app.listen(port, () => console.log(`Express listening at http:.//localhost:${port}`));

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Collection();

client.once('ready', () => {
	console.log('WE READY BOIS!');
});


client.on('messageCreate', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Collection());
	}

	//so dummy bot doesnt answer itself
	/* if (message.author === client.user) return
	if (message.content.includes(client.user.toString())) {
		console.log(client.user.toString());
		message.reply(`What do you want ${message.author.toString()}? Leave me be!`)
	} */

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (!message.member.voiceChannel === 'General') {
		return console.error('no such channel br0h');
	}

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			channel.join().then(
				con => {
					console.log('it worked');
				}).catch (e => console.error(e));
			const timeLeft = (expirationTime - now) / 1000;
			

			return message.reply(`please wait your impatient ass, ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`, { files: ['./media/tooManyQuestionsAudio.mp3','./media/tooManyQuestionsImg.png']});
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);
