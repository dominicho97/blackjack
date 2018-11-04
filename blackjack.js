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

hitButton.addEventListener('click', function(){
playerCards.push(getNextCard());
checkForEndGame();
showStatus();
});

stayButton.addEventListener('click', function(){
  gameOver = true;
  checkForEndGame();
  showStatus();
})







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


function getCardNumericalValue(card){
switch(card.value){
  case'Ace':
  return 1
  case'Two':
  return 2
  case'Three':
  return 3
  case 'Four':
  return 4
  case 'Five':
  return 5
  case 'Six':
  return 6
  case 'Seven':
  return 7
  case'Eight':
  return 8
  case 'Nine':
  return 9
   default:
  return 10 

}
}












function getScore(cardArray){
 let score = 0;
 let hasAce = false;
 for(let i = 0;  i<cardArray.length; i++){
   let card = cardArray[i];
   score += getCardNumericalValue(card);
   if (card .value === 'Ace'){
     hasAce = true;
   }
 }
if (hasAce && score + 10 <= 21){
  return score + 10;
  }
  return score;
}









function updateScores(){
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards);
}

function checkForEndGame(){
  updateScores();
  
  
  if (gameOver){
    // let dealer take cards
    while(dealerScore<playerScore)
    && playerScore <= 21
    && dealerScore <= 21{
      dealerCards.push(getNextCard());
      updateScores();
    }
  }
}




if (playerScore>21){
playerWon = false;
gameOver = true;
}
else if(dealerScore>21){
playerWon = true;
gameOver = true;
}
else if (gameOver){
 if (playerScore>dealerScore){
   playerWon = true;
 }
 else{
   playerWon = false
 }

newGameButton.style.display = 'inline'
hitButton.style.display = 'none'
stayButton.style.display = 'none';
  }
}



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

let playerCardString  = '';
for (let i= 0; i< playerCards.length; i++){
  dealerCardString += getCardString(playerCards[i]) + '/n';
}

updateScores();


textArea.innerText = 
'Dealer has: /n'+
dealerCardString +
'(score:' + playerScore + ')/n/n';

'Player has:/n' +
playerCardString +
'(score:'+ playerScore + ')/n/n';

if (gameOver){
  if (playerWon){
textArea.innerText += "YOU WIN!";
  }  else {
    textArea.innerText +="DEALER WINS!";
  }
newGameButton.style.display = 'inline';
hitButton.style.display = 'none';
stayButton.style.display = 'none';



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


