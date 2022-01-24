const fetch = require('node-fetch');

module.exports = {
    name: 'progression',
    description: 'Displays the Rock Game Shops raid progression (current expansion only)',
    args: true,
    execute(message, args){

        let raid = args[0];
        
        const prettyRaid = raid.replace(/\-/g, ' ');

        let raidObj = {
            raid: prettyRaid,
            summary: ''
        };


        fetch('https://raider.io/api/v1/guilds/profile?region=us&realm=thunderlord&name=The%20Rock%20Game%20Shop&fields=raid_progression%2C%20raid_rankings')
        .then(res => res.json())
        .then(data => {
            raidObj.summary = data.raid_progression[raid].summary;
            
            message.channel.send(`The Rock Game Shop progress on ${raidObj.raid} is ${raidObj.summary}`);
        })
        .catch (err => console.error(err));
    }
}