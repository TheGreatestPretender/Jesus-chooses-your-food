const { card } = require('mtgsdk');

module.exports = {
    name: 'ruling',
    description: 'get the ruling of an mtg card',
    args: true,
    execute(message, args) {
        const arg = args.join(' ');
        
        card.where({name: arg})
        .then(res => {
            const paper = res[0];
            if (paper.rulings != 'undefined') {
                message.channel.send(`** Official Rulings for: ${paper.name}**\n`)
                paper.rulings.forEach(element => {
                    message.channel.send(`• ${element.text}\n`);
                })
            } else {
                message.channel.send(`Can\'t find any rulings for ${paper.name}`);
            }
        });
    }
};