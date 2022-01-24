module.exports = {
    name: 'honk',
    description: 'honk-er',
    execute(message) {
        return message.reply({files: ['./media/wholesomeHonk.JPG']})
    }
}