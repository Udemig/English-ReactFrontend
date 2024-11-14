// Set of emojis used for the memory game cards
const emojis = ["🎮", "🎲", "🎯", "🎪", "🎭", "🎨", "🎱", "🎳"];

// Variables to track the game state
let cards = []; // Array to store all the card elements
let flippedCards = []; // Array to store the currently flipped cards
let matchedPairs = 0; // Counter for matched pairs of cards
let moves = 0; // Counter for moves made by the player
let canFlip = true; // Flag to control whether a card can be flipped

// Function to create an individual card with a given emoji
function createCard(emoji) {
  const card = document.createElement("div"); // Create a div element for the card
  card.className = "card"; // Add the "card" class for styling
  card.dataset.emoji = emoji; // Store the emoji in a custom data attribute
  card.addEventListener("click", flipCard); // Add a click event listener to flip the card
  return card; // Return the created card element
}

// Function to shuffle an array (used to randomize the card order)
function shuffleArray(array) {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Pick a random index
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements at i and j
  }
  return array; // Return the shuffled array
}

// Function to handle the card flip logic
function flipCard() {
  if (
    !canFlip || // Check if flipping is allowed
    this.classList.contains("flipped") || // Check if the card is already flipped
    this.classList.contains("matched") // Check if the card is already matched
  ) {
    return; // Exit if any of the conditions are true
  }

  this.classList.add("flipped"); // Add "flipped" class to reveal the card
  this.textContent = this.dataset.emoji; // Display the emoji on the card
  flippedCards.push(this); // Add the card to the list of flipped cards

  if (flippedCards.length === 2) { // Check if two cards are flipped
    moves++; // Increment the move counter
    document.getElementById("moves").textContent = moves; // Update move count display
    canFlip = false; // Temporarily disable flipping

    // Check if the two flipped cards match
    if (flippedCards[0].dataset.emoji === flippedCards[1].dataset.emoji) {
      matchedPairs++; // Increment the matched pairs counter
      document.getElementById("pairs").textContent = matchedPairs; // Update pairs display
      flippedCards.forEach((card) => {
        card.classList.add("matched"); // Mark the cards as matched
        card.classList.remove("flipped"); // Remove the "flipped" class
      });
      flippedCards = []; // Clear the flipped cards list
      canFlip = true; // Enable flipping again

      // Check if all pairs are matched (game won)
      if (matchedPairs === emojis.length) {
        setTimeout(() => {
          alert(`Congratulations! You won in ${moves} moves!`); // Display win message
        }, 500); // Delay the alert for better user experience
      }
    } else {
      // If cards do not match, flip them back after a delay
      setTimeout(() => {
        flippedCards.forEach((card) => {
          card.classList.remove("flipped"); // Remove the "flipped" class
          card.textContent = ""; // Hide the emoji
        });
        flippedCards = []; // Clear the flipped cards list
        canFlip = true; // Enable flipping again
      }, 1000); // Delay to show the unmatched cards briefly
    }
  }
}

// Function to initialize and start the game
function initializeGame() {
  const gameContainer = document.getElementById("gameContainer"); // Get game container element
  gameContainer.innerHTML = ""; // Clear existing cards
  cards = []; // Reset the cards array
  const gameEmojis = [...emojis, ...emojis]; // Duplicate emojis array for pairs
  shuffleArray(gameEmojis); // Shuffle the emojis

  // Create and add cards to the game container
  gameEmojis.forEach((emoji) => {
    const card = createCard(emoji); // Create a card with the emoji
    cards.push(card); // Add card to the cards array
    gameContainer.appendChild(card); // Append card to game container
  });
}

// Function to reset the game state
function resetGame() {
  flippedCards = []; // Clear flipped cards
  matchedPairs = 0; // Reset matched pairs counter
  moves = 0; // Reset moves counter
  canFlip = true; // Allow flipping
  document.getElementById("moves").textContent = "0"; // Reset move display
  document.getElementById("pairs").textContent = "0"; // Reset pairs display
  initializeGame(); // Reinitialize the game
}

// Start the game when script loads
initializeGame();
