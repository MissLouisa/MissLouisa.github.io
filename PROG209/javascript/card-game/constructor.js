function cardGame(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}

cardGame.prototype.getSuit = function() {
    return this.suit;
}

cardGame.prototype.getRank = function() {
    return this.rank;
}

cardGame.prototype.setSuit = function(suit) {
    this.suit = suit;
}

cardGame.prototype.setRank = function(rank) {
    this.rank = rank;
}

