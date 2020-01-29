function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let deck = {
    'cardArray' : [], //array
    'loadCards' : function() { //method
        for (let i = 0; i < 52; i++) {
            this.cardArray[i] = new cardGame(getRandomInt(4), 1 + getRandomInt(13));
        }
    }
}

for (i=0; i < 26;i++) {
    this.playerArray[i] = this.deck.cardArray[i];
    this.computerArray[i] = this.deck.cardArray[i+26];
}