function cardGame(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}

cardGame.prototype.setSuit = function(suit) {
    this.suit = suit;
}

cardGame.prototype.setRank = function(rank) {
    this.rank = rank;
}