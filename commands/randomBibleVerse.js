module.exports = {
    name: 'Jesus',
    description: 'RNJesus will quote a random bible verse',
    args: true,
    execute(message) {
        if (message.member.voice.channel) {
            const con = message.member.voice.channel.join();
            const dispatch = con.play('https://www.youtube.com/watch?v=7ODcC5z6Ca0');
    
            dispatch.on('start', () => { console.log('Jesus has entered...')})
        }
        
    }
}