const emojis = ["🎮", "🎲", "🎯", "🎪", "🎭", "🎨", "🎱", "🎳"];
let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let canFlip = true;

function createCard(emoji) {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.emoji = emoji;
  card.addEventListener("click", flipCard);
  return card;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function flipCard() {
  if (
    !canFlip ||
    this.classList.contains("flipped") ||
    this.classList.contains("matched")
  ) {
    return;
  }

  this.classList.add("flipped");
  this.textContent = this.dataset.emoji;
  flippedCards.push(this);

  if (flippedCards.length === 2) {
    moves++;
    document.getElementById("moves").textContent = moves;
    canFlip = false;

    if (flippedCards[0].dataset.emoji === flippedCards[1].dataset.emoji) {
      matchedPairs++;
      document.getElementById("pairs").textContent = matchedPairs;
      flippedCards.forEach((card) => {
        card.classList.add("matched");
        card.classList.remove("flipped");
      });
      flippedCards = [];
      canFlip = true;

      if (matchedPairs === emojis.length) {
        setTimeout(() => {
          alert(`Congratulations! You won in ${moves} moves!`);
        }, 500);
      }
    } else {
      setTimeout(() => {
        flippedCards.forEach((card) => {
          card.classList.remove("flipped");
          card.textContent = "";
        });
        flippedCards = [];
        canFlip = true;
      }, 1000);
    }
  }
}

function initializeGame() {
  const gameContainer = document.getElementById("gameContainer");
  gameContainer.innerHTML = "";
  cards = [];
  const gameEmojis = [...emojis, ...emojis];
  shuffleArray(gameEmojis);

  gameEmojis.forEach((emoji) => {
    const card = createCard(emoji);
    cards.push(card);
    gameContainer.appendChild(card);
  });
}

function resetGame() {
  flippedCards = [];
  matchedPairs = 0;
  moves = 0;
  canFlip = true;
  document.getElementById("moves").textContent = "0";
  document.getElementById("pairs").textContent = "0";
  initializeGame();
}

// Start the game
initializeGame();
