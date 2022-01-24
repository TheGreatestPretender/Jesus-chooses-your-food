const fetch = require('node-fetch');

module.exports = {
    name: 'affixes',
    description: 'Get the weekly affixes for NA',
    execute(message){
        fetch('https://raider.io/api/v1/mythic-plus/affixes?region=us&locale=en')
        .then(res => res.json())
        .then(json => {
            message.channel.send(`The Mythic+ Affixes for this week are: ${json.title}`);
        })
        .catch (err => console.error(err));
    }
}