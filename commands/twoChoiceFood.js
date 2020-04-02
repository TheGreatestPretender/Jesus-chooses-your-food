module.exports = {
    name: 'rng',
    description: 'just an rng for choosing two options of food',
    args: true,
    execute(message, args) {
        let rng = Math.floor(Math.random() * 10) + 1;

        if (args.includes('or')) {
            
            if (rng % 2 === 0) {
                if (rng === 8) message.channel.send('Sorry try again :)')
                else message.channel.send(`You should choose ${args[1]}`);
            }
            else {
                message.channel.send(`You should choose ${args[0]}`);
            }
        }
    }
}