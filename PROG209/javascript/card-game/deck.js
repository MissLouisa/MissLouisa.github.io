let deck = {
    'cardArray' : [], //array
    'loadCards' : function() { //method
        for (let i = 0; i < 52; i++) {
            this.cardArray[i] = new cardGame(math.Random() % 4, 1 + math.Random() % 13); //%4 because it's between 1 to 4; 1+ %13 because it is between 2 to 14
        }
    }
}