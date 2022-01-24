const fetch = require('node-fetch');
const {convertArrayToObj} = require('../utils/utils');

module.exports = {
    name: 'mplus',
    description: 'Get leader board stats of m+ for your character',
    args: true,
    execute(message, args){
        const charName = args[0];
        const serverName = args[1];

       fetch(`https://raider.io/api/v1/characters/profile?region=us&realm=${serverName}&name=${charName}&fields=mythic_plus_recent_runs`)
        .then(res => res.json())
        .then(data => {
            let runInfo = data.mythic_plus_recent_runs;
            let dungeon = [];
            let mLevel = [];
            let score = [];

            for(let props in runInfo){
                dungeon.push(runInfo[props].dungeon);
                mLevel.push(runInfo[props].mythic_level);
                score.push(runInfo[props].score);
            }

            if (dungeon || mLevel || score === 'undefined') {
                message.channel.send(`It doesn't look like ${charName} on ${serverName} did any mythic plus' this week. Get better :heart:`);
            }
            else {
                message.channel.send(`${charName}'s Top Three Mythic Plus runs this week: 
                                                    \nDungeon: ${dungeon[0]}, Level: ${mLevel[0]}, Raider.IO Score: ${score[0]}
                                                    \nDungeon: ${dungeon[1]}, Level: ${mLevel[1]}, Raider.IO Score: ${score[1]}
                                                    \nDungeon: ${dungeon[2]}, Level: ${mLevel[2]}, Raider.IO Score: ${score[2]}`);
            }
        })
        .catch (err => console.error(err));
    }
}