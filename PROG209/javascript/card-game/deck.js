// credits: Mozilla documentation
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let deck = {
    'cardArray' : [], //array
    'loadCards' : function() { //method
        for (let i = 0; i < 52; i++) {
            this.cardArray[i] = new cardGame(getRandomInt(13), getRandomInt(3));
        }
    }
}