//addEventListener sets up a function that will be called
//whenever the specified event is delivered to the target
document.addEventListener("DOMContentLoader", function (event) {
    let playerArray = [26];
    let computerArray = [26];

    //button deal start visible
    document.getElementById('startGame').style.visibility = 'visibility';

    //button next is hidden
    document.getElementById('next').style.visibility = 'hidden';

    document.getElementById("deal").addEventListener("click", function () {
        deck.loadCards();
        //button deal become hidden
        document.getElementById('startGame').style.visibility = 'hidden';
        for (int i = 0; i < 26; i++) {
            this.playerArray[i] = this.deck.cardArray[i];
            this.computerArray[i] = this.deck.cardArray[i+26];
        }

        console.log(deck.playerArray);
        console.log("----------------------");
        console.log(deck.computerArray);

        //button next is visible now
        document.getElementById('next').style.visibility = 'visibility';
    });

    document.getElementById("next").addEventListener("click"),function () {
        let pCard = document.getElementById("playerCard");
        let cCard = document.getElementById("computerCard");

        for(i=0; i < 26; i++) {
            pCard.textContent = playerArray[i].cardArray + " " + playerArray[i].loadCards;
            cCard.textContent = playerArray[i].cardArray + " " + computerArray[i].loadCards;
        }
        pCard.textContent = "boo";
        cCard.textContent = "hoo";
    }
});