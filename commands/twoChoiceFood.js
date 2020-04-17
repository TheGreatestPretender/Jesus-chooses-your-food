module.exports = {
    name: 'rng',
    description: 'just an rng for choosing two options of food',
    args: true,
    execute(message, args) {
        const baddies = ['or', 'OR']

        let rng = Math.floor(Math.random() * 10) + 1;

        if (args.includes(baddies) || !args.includes(baddies)){
            if (rng % 2 === 0) {
                if (rng === 8) {
                    message.channel.send('Sorry try again :)', { files: ['./media/tryAgainImg.png']});
                    return;
                }
                message.channel.send(`You should choose ${args[2]}`);
            }
            else {
                message.channel.send(`You should choose ${args[0]}`);
            }
        }
    }
}
