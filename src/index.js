//playing background audio on reload
window.addEventListener("load", () => {
  const soundModal = document.getElementById("soundModal");
  const playSoundButton = document.getElementById("playSound");
  const muteSoundButton = document.getElementById("muteSound");
  const audioElement = document.getElementById("audio");
  detectSelectedCard();

  // Show the modal on page load
  soundModal.classList.add("flex");
  soundModal.classList.remove("hidden");

  // Event listeners for modal buttons
  playSoundButton.addEventListener("click", () => {
    audio.play();
    audioElement.muted = false; // Unmute audio
    soundModal.classList.add("hidden"); // Hide modal
  });

  muteSoundButton.addEventListener("click", () => {
    audioElement.muted = true; // Keep audio muted
    soundModal.classList.add("hidden"); // Hide modal
  });
});

// interactive sound button
const audioIcon = document.getElementById("audioicon");
const audioElement = document.getElementById("audio");
const svgPath = document.getElementById("soundpath");
audioIcon.addEventListener("click", () => {
  if (!audioElement.paused) {
    audioElement.pause();
    audioIcon.setAttribute("fill", "rgba(239,68,68,1)");
    svgPath.setAttribute(
      "d",
      "M10 7.22056L6.60282 10.0001H3V14.0001H6.60282L10 16.7796V7.22056ZM5.88889 16.0001H2C1.44772 16.0001 1 15.5524 1 15.0001V9.00007C1 8.44778 1.44772 8.00007 2 8.00007H5.88889L11.1834 3.66821C11.3971 3.49335 11.7121 3.52485 11.887 3.73857C11.9601 3.8279 12 3.93977 12 4.05519V19.9449C12 20.2211 11.7761 20.4449 11.5 20.4449C11.3846 20.4449 11.2727 20.405 11.1834 20.3319L5.88889 16.0001ZM20.4142 12.0001L23.9497 15.5356L22.5355 16.9498L19 13.4143L15.4645 16.9498L14.0503 15.5356L17.5858 12.0001L14.0503 8.46454L15.4645 7.05032L19 10.5859L22.5355 7.05032L23.9497 8.46454L20.4142 12.0001Z"
    );
    console.log("pause music");
  } else {
    audioElement.play();
    audioIcon.setAttribute("fill", "rgba(100,205,138,1)");
    svgPath.setAttribute(
      "d",
      "M13 7.22056L9.60282 10.0001H6V14.0001H9.60282L13 16.7796V7.22056ZM8.88889 16.0001H5C4.44772 16.0001 4 15.5524 4 15.0001V9.00007C4 8.44778 4.44772 8.00007 5 8.00007H8.88889L14.1834 3.66821C14.3971 3.49335 14.7121 3.52485 14.887 3.73857C14.9601 3.8279 15 3.93977 15 4.05519V19.9449C15 20.2211 14.7761 20.4449 14.5 20.4449C14.3846 20.4449 14.2727 20.405 14.1834 20.3319L8.88889 16.0001ZM18.8631 16.5911L17.4411 15.1691C18.3892 14.4376 19 13.2902 19 12.0001C19 10.5697 18.2493 9.31476 17.1203 8.60766L18.5589 7.16906C20.0396 8.26166 21 10.0187 21 12.0001C21 13.8422 20.1698 15.4905 18.8631 16.5911Z"
    );
    console.log("play music");
  }
});

let userId;

// game play starts here
function gamestarts() {
  const gameplay = document.getElementById("gameplay");
  const introscreen = document.getElementById("intoscreen");
  introscreen.classList.add("hidden");
  gameplay.classList.remove("hidden");
  const player1 = document.getElementById(`${globalThis.userId}s`);
  player1.addEventListener("click", () => {
    playermovement(player1);
  });
}

function playerCard(event) {
  // this will get the div that hold the id in which we clicked
  globalThis.userId = event.currentTarget.id;
  console.log(globalThis.userId);
  // run the game
  gamestarts();
  battleBegins();
}

console.log(globalThis.userId);

function detectSelectedCard() {
  // get all cards
  const allCards = document.querySelectorAll(".selectcard");
  // add and event listern for each card
  allCards.forEach((card) => {
    // run the playacrd with an event of click on each card
    card.addEventListener("click", playerCard);
  });
}

const hiddencard = ["diamnond", "spade", "club", "heart"];
let deck = [];
let viewDeck = [];
let currDeck = 0;

/* this is used to shuffle ths hidden card at the start of the game*/
shuffle(hiddencard);

/* fisher-yates algorithm */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    // using desctucturing
    [array[i], array[random]] = [array[random], array[i]];
  }
  // console.log(array);
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

// main deck should shouw how many cards it has left

// get the open card
function battleBegins() {
  setInterval(() => {
    if (currDeck <= deck.length) {
      viewDeck.push(deck[0]);
      currDeck++;
      let view = deck.length--;
      document.getElementById("cardleft").innerText = view;
      // console.log(view);
      // console.log(viewDeck);
      // console.log(viewDeck.length);
      // console.log(`this is the curent deck count${currDeck}`);
    }
  }, 2000);
}
console.log(deck.length);

// the open should take 1 card every 2 sec from the main dect

// get all players
const players = document.querySelectorAll(".player");
function allplayerMovement() {
  let allPlayerLoc = Array.from(players).map((player) => player.dataset.row);
  console.log(allPlayerLoc);
  console.log(allPlayerLoc.every(checkLiveRow));
  function checkLiveRow(allPlayerLoc) {
    return allPlayerLoc == 1;
    // this checks if all players are raeched row 1
  }
}

// control playermovement based on card
function playermovement(player) {
  // get all players row location
  const playerLoc = parseInt(player.dataset.row);
  if (playerLoc < 4) {
    // move players up
    const newRow = playerLoc + 1;
    // make this the new loaction
    player.dataset.row = newRow;
    // move players up by 100px
    player.style.transform = `translateY(-${newRow * 100}px)`;
    allplayerMovement();
  } else {
    console.log("player won");
  }
}

// shuffle user id col pos
shuffle(players);

// control playermovement based on special card
function specialcard() {}

// the deck is shuffled at the starts of the game
// the top card is choossen and if it matches any players then
// the current isactve is off and the next card that has the card id is now active and the card player is render their
