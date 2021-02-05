const { card } = require('mtgsdk');

const isCreature = (obj) => {
  for(type in obj) {
    if (type === 'Creature') {
      return true;
    }
    return false;
  }
}

module.exports = {
    name: 'mtg',
    description: 'fetch some magic stuff oooo',
    args: true,
    execute(message, args) {
        let arg = args.join(' ');
        
        card.where({name: arg})
        .then(res => {
          const paper = res[0];

          //if the card in question is a creature then we want to display the power / toughness
          if (isCreature(paper)) {
            message.channel.send(`**${paper.name}**\nMana Cost: ${paper.manaCost}\nType: ${paper.type}\n*${paper.text}*\nPower and Toughness: ${paper.power}/${paper.toughness}`);
          } else { 
            message.channel.send(`**${paper.name}**\nMana Cost: ${paper.manaCost}\nType: ${paper.type}\n*${paper.text}*\n`);
          }
        });
    }
};
/*
{
  name: 'Squee, the Immortal',
  manaCost: '{1}{R}{R}',
  cmc: 3,
  colors: [ 'Red' ],
  colorIdentity: [ 'R' ],
  type: 'Legendary Creature — Goblin',
  supertypes: [ 'Legendary' ],
  types: [ 'Creature' ],
  subtypes: [ 'Goblin' ],
  rarity: 'Rare',
  set: 'DOM',
  setName: 'Dominaria',
  text: 'You may cast Squee, the Immortal from your graveyard or from exile.',
  flavor: '"You gotta be pretty smart to live long as me, but not being able to die helps."',
  artist: 'Svetlin Velinov',
  number: '146',
  power: '2',
  toughness: '1',
  layout: 'normal',
  multiverseid: 443034,
  imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=443034&type=card',
  rulings: [
    {
      date: '2018-04-27',
      text: 'Squee’s ability doesn’t prevent you from casting Squee from any other zone.'
    },
    {
      date: '2018-04-27',
      text: 'You must follow the normal timing permissions and restrictions and pay its cost to cast Squee from your graveyard or from e
xile.'
    }
  ],
}
*/