module.exports = {
    name: 'rng',
    description: 'just an rng for choosing two options of food',
    args: true,
    execute(message, args) {
        let rng = Math.floor(Math.random() * 10) + 1;

        if (rng % 2 === 0 && !8) {
            message.channel.send(`You should choose ${args[1]}`);
        }
        else if (rng === 8) {
            message.channel.send('Sorry try again :)', { files: ['./media/tryAgainImg.png']});
        }
        else {
            message.channel.send(`You should choose ${args[0]}`);
        }
    }
}