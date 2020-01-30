let playerArray = [26];
let computerArray = [26];
let playerScore = 0;
let computerScore = 0;
let turnNumber = 0;

let cardFour = ['SPADE', 'CLUB', 'DIAMOND', 'HEART'];
let cardFour2 = ['2','3','4','5','6','7','8','9','10','JACK','QUEEN','KING','ACE'];


function startGameEvent() {
    deck.loadCards();
    //button deal become hidden
    document.getElementById('startGame').style.visibility = 'hidden';
    for (let i = 0; i < 26; i++) {
        playerArray[i] = deck.cardArray[i];
        computerArray[i] = deck.cardArray[i+26];
    }

    console.log(deck.playerArray);
    console.log("----------------------");
    console.log(deck.computerArray);

    //button next is visible now
    document.getElementById('next').style.visibility = 'visible';
};

function nextEvent () {
    let secElement = document.getElementById('cardGamesHere');
    secElement.innerHTML = '';

    if (turnNumber >= 26) {
        let d = document.createElement('p');
        let winner = '';
        if (playerScore >= computerScore) {
            winner = 'Player!';
        } else {
            winner = 'Computer!';
        }
        let n = document.createTextNode('The winner is: ' + winner);
        d.appendChild(n);
        secElement.appendChild(d); 
        console.log('done!');
        return;       
    }

    let turn_data = document.createElement('p');
    let turn_node = document.createTextNode('Turn Number: ' + turnNumber.toString());
    turn_data.appendChild(turn_node);
    secElement.appendChild(turn_data);

    turn_data = document.createElement('h5');
    turn_node = document.createTextNode('Player Score: ' + playerScore.toString());
    turn_data.appendChild(turn_node);
    secElement.appendChild(turn_data);

    turn_data = document.createElement('p');
    turn_node = document.createTextNode('Player Card: ' + cardFour[playerArray[turnNumber].getSuit()] + ' ' + cardFour2[playerArray[turnNumber].getRank()]);
    turn_data.appendChild(turn_node);
    secElement.appendChild(turn_data);

    turn_data = document.createElement('h5');
    turn_node = document.createTextNode('Computer Score: ' + computerScore.toString());
    turn_data.appendChild(turn_node);
    secElement.appendChild(turn_data);

    turn_data = document.createElement('p');
    turn_node = document.createTextNode('Computer Card: ' + cardFour[computerArray[turnNumber].getSuit()] + ' ' +cardFour2[playerArray[turnNumber].getRank()]);
    turn_data.appendChild(turn_node);
    secElement.appendChild(turn_data);
 
    if (playerArray[turnNumber].getRank() == computerArray[turnNumber].getRank()) {
        if (playerArray[turnNumber].getSuit() > computerArray[turnNumber].getSuit()) {
            playerScore = playerScore + 1;
            turn_data = document.createElement('h2');
            turn_node = document.createTextNode('You won!');
            turn_data.appendChild(turn_node);
            secElement.appendChild(turn_data);
        } else {
            computerScore = computerScore + 1;
            turn_data = document.createElement('h2');
            turn_node = document.createTextNode('You lost!');
            turn_data.appendChild(turn_node);
            secElement.appendChild(turn_data);
        }
    } else if (playerArray[turnNumber].getRank() > computerArray[turnNumber].getRank()) {
        playerScore = playerScore + 1;
        turn_data = document.createElement('h2');
        turn_node = document.createTextNode('You won!');
        turn_data.appendChild(turn_node);
        secElement.appendChild(turn_data);
    } else {
        computerScore = computerScore + 1;
        turn_data = document.createElement('h2');
        turn_node = document.createTextNode('You lost!');
        turn_data.appendChild(turn_node);
        secElement.appendChild(turn_data);
    }
    
    turnNumber++;
};