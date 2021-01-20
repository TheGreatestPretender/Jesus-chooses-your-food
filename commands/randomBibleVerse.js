module.exports = {
    name: 'jesus',
    description: 'RNJesus will quote a random bible verse',
    execute(message) {
        
        const bibleVerses = [
            "Did you not pour me out like milk and curdle me like cheese - Jobs 10:10",
            "Your teeth are whiter than sheep freshly washed; they match perfectly, not one is missing - Song of Solomon 4:2",
            "In spite of what you think, these men are not drunk, for it is only nine o’clock in the morning. - Acts 2:15",
            "I wish those who are disturbing you might also get themselves castrated! - Galtians 5:12",
            "[Like] a gold ring in a pig’s snout, [so] is a beautiful woman who lacks good taste. - Proverbs 11:22",
            "and Esau said to Jacob, “Please let me have a swallow of that red stuff there, for I am famished.” Therefore his name was called Edom. - Genesis 25:30",
            "So Gideon took the men down to the water. There the LORD told him, Separate those who lap the water with their tongues as a dog laps from those who kneel down to drink. - Judges 7:5",
            "Now Joshua was old and advanced in years when the LORD said to him, “You are old and advanced in years - Joshua 13:1",
            "Alcohol is for people who are dying, for those who are in misery. - Proverb`s 31:6",
            "From there Elisha went up to Bethel. As he was walking along the road, some boys came out of the town and jeered at him. “Get out of here, baldy!” they said. “Get out of here, baldy!” - 2 Kings 2:23",
            "You all are bitches - Dogg 69420"
        ];

        let rng = Math.floor(Math.random() * 10) + 1;
        message.channel.send(`And so the prophet said! ${bibleVerses[rng]}`, {tts: true});
    }
}
