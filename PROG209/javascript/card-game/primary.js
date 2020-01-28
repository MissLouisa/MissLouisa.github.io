let playerArray = [26];
let computerArray = [26];

//button deal start visible
document.getElementById('startGame').style.visibility = 'visibility';

//button next is hidden
document.getElementById('next').style.visibility = 'hidden';

//when clicked on "deal the cards"
function deal() {
    document.getElementById('startGame').style.visibility = 'hidden';
    deck.loadCards(52);

    playerArray = [];
    computerArray = [];

    for (let i = 0; i < 26; i++) {
        playerArray[i] = deck.cardArray[i];
        console.log(playerArray);
    }

    for (let i = 26; i < 52; i++) {
        computerArray[i-26] = deck.cardArray[i];
        console.log(computerArray);
    }
}

document.getElementById('next').style.visibility = 'visibility';

function next() {

}
