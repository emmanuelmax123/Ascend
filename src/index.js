// select player-- player can pick between one of four shapes

/* player choice */
const playerCards = [
  { shape: "diamond", id: "1" },
  { shape: "spade", id: "2" },
  { shape: "club", id: "3" },
  { shape: "heart", id: "4" },
];

document.getElementById("spade").addEventListener("click", playerCard);
document.getElementById("club").addEventListener("click", playerCard);
document.getElementById("heart").addEventListener("click", playerCard);
document.getElementById("diamond").addEventListener("click", playerCard);

function playerCard(event) {
  // this will get the id in which we clicked
  userId = event.target.id; //if spade was clicked spade is now the userId

  // Find the card in the playerCards array where the shape matches the clicked id
  const usercard = playerCards.find((card) => card.shape === userId);
  if (usercard) {
    console.log(`user selected ${usercard.shape}`);
  }
}

const hiddencard = ["diamnond", "spade", "club", "heart"];
const deck = [];

/* this is used to shuffle ths hidden card at the start of the game*/
shuffle(hiddencard);

/* fisher-yates algorithm */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    // using desctucturing
    [array[i], array[random]] = [array[random], array[i]];
  }
  console.log(array);
}

/* this is for generating deck and shuffling it */

function generateDeck() {
  const shape = ["diamnond", "spade", "club", "heart"];
  const Specialshape = ["movecard", "swapCard"];

  // add shapes into deck
  shape.forEach((shape) => {
    for (let i = 0; i < 7; i++) {
      deck.push({ shape: shape });
    }
  });

  // select random special shape
  for (let i = 0; i < 4; i++) {
    const ranselect = Math.floor(Math.random() * Specialshape.length);
    deck.push({ shape: Specialshape[ranselect] });
  }
  shuffle(deck);
}

generateDeck();

// get hidden card takes the card shapes randomize them and place them when the game starts

// it should create a deck of 30 cards it should add each shape 7 times, it should randomly add 4 special card (specialcard1 or specialcard2)

// create a deck
// --Contains 32 cards
// isactive elememt on all decks with the card id

/*Players moveemnet*/
// the deck is shuffled at the starts of the game
// the top card is choossen and if it matches any players then
// the current isactve is off and the next card that has the card id is now active and the card player is render their
