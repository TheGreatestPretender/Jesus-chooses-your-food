module.exports = {
    name: 'test',
    description: 'RNJesus will quote a random bible verse',
    args: true,
    execute(message) {
        if(message.content === "ayy") {
            const ayy = client.emojis.find(emoji => emoji.name === "100");
            message.reply(`${ayy} LMAO`);
        }
    }
}