let playerArray = [26];
let computerArray = [26];

//button deal start visible
//document.getElementById('startGame').style.visibility = 'visible';

//button next is hidden
//document.getElementById('next').style.visibility = 'hidden';

function startGameEvent() {
    deck.loadCards();
    //button deal become hidden
    document.getElementById('startGame').style.visibility = 'hidden';
    for (let i = 0; i < 26; i++) {
        this.playerArray[i] = this.deck.cardArray[i];
        this.computerArray[i] = this.deck.cardArray[i+26];
    }

    console.log(deck.playerArray);
    console.log("----------------------");
    console.log(deck.computerArray);

    //button next is visible now
    document.getElementById('next').style.visibility = 'visible';
};

function nextEvent () {
    let pCard = document.getElementById("playerCard");
    let cCard = document.getElementById("computerCard");

    for(i=0; i < 26; i++) {
        pCard.textContent = playerArray[i].cardArray + " " + playerArray[i].loadCards;
        cCard.textContent = playerArray[i].cardArray + " " + computerArray[i].loadCards;
    }
    pCard.textContent = "boo";
    cCard.textContent = "hoo";
};