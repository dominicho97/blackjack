//
// blackjack
// y Dominic Ho

//Card variables
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades' ];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two']

//DOM variables
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

//Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];





hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();



newGameButton.addEventListener('click', function(){
  gameStarted = true;
  gameOver = false;
  playerWon = false;

  deck = createDeck();
  shuffleDeck (deck);
  dealerCards = [getNextCard(), getNextCard()];
  playerCards = [getNextCard(), getNextCard()];

  textArea.innerText = 'Started...';
  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
  showStatus();
});




function createDeck () {
  let deck = [];
  for (let suitIdx = 0; suitIdx<suits.length; suitIdx++) {
    for (let valuesIdx = 0; valuesIdx<values.length;valuesIdx++) {
      let card = {
            suit: suits[suitIdx],
            value: values[valuesIdx]
      };
    deck.push(card );
      }
    }
    return deck;
}

function shuffleDeck(deck){
for (let i = 0; i<deck.length; i++ ){
  let swapIdx = math.trunc(math.random()*deck.length);
  let tmp = deck(swapIdx);
  deck[i] = swapIdx
  deck[swapIdx] = deck[i];
  }
}

function getCardString(card)  {
  return card.value +  ' of '  + card.suit;
}


function getNextCard(){
  return deck.shift();
}

function showStatus(){
  if (!gameStarted){
    textArea.innerText = 'Welcome to Blackjack!';
    return;
  }
}

let dealerCardString = '';
for(let i=0; i<dealerCards.length; i++){
  playerCardString += getCardString(playerCards[i]) + '/n';
}





for(var i =0; i<deck.length; i++){
  textArea.innerText += '/n'+ getCardString(deck[i]);
  }



let deck = createDeck();





let playerCards = [getNextCard,getNextCard];



    console.log("Welcome to Blackjack!");
    console.log("You are dealt: ");

    console.log("  "+ getCardString(playerCards[0]));
    console.log("  "+ getCardString(playerCards[1]));


