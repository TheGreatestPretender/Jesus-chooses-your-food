module.exports = {
    name: 'jesus',
    description: 'RNJesus will quote a random bible verse',
    execute(message) {
        message.channel.send('this is your god talking, also known as BIDO!', {tts: true});
    }
}