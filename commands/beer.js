const fetch = require('node-fetch');

module.exports = {
    name: 'beer',
    description: 'get a random beer from rando beers',
    execute(message) {
        let i = Math.floor(Math.random() * 10000) + 1;
        let beer;
        fetch('https://api.punkapi.com/v2/beers/random')
        .then(res => res.json())
        .then(json => {
            for (i in json) {
                console.log(json[i].name)
                beer = json[i].name;
            }
            message.channel.send('Try out this beer: ' + beer)
        })
        .catch(err => console.error(err));
    }
}