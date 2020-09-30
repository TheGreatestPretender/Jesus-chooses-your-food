module.exports = {
    name: 'secret',
    description: 'secret message',
    execute(message) {
        message.channel.send('Michael says \"We love you <3\" @everyone');
    }
}