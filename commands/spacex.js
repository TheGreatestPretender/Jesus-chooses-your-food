const fetch = require('node-fetch');
module.exports = {
    name: 'spacex',
    description: 'Returns SpaceX next launch time and where to watch it',
    execute(message) {
        fetch('https://api/spacexdata.com/v3/launches/upcoming')
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error(err))
    }
}