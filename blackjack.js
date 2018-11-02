//
// blackjack
// y Dominic Ho


let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades' ];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two']





function createDeck () {
  let deck = [];
  for (let suitIdx = 0; suitIdx<suits.length; suitIdx++) {
    for (let valuesIdx = 0; valuesIdx<values.length;valuesIdx++) {
    deck.push(values[valuesIdx] + ' of ' + suits[suitIdx] );
      }
    }
    return deck;
}

function getNextCard(){
  return deck.shift();
}

let deck = createDeck)();


for (let i = 0; i<deck.length; i++){
  console.log(deck[i]);
}


let playerCards = [deck[0], deck[2]];



    console.log("Welcome to Blackjack!");
    console.log("You are dealt: ");

    console.log("  "+ playerCards[1]);
    console.log("  "+ playerCards[0]);


