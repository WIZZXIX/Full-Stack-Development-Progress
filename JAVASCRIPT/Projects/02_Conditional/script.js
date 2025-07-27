
// --- GAME SETUP ---
// Select all the elements we'll need to interact with
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const playAgainBtn = document.getElementById('playAgainBtn');
const feedbackText = document.getElementById('feedbackText');
const guessesRemainingSpan = document.getElementById('guessesRemaining');
const previousGuessesSpan = document.getElementById('previousGuesses');

// --- GAME STATE VARIABLES ---
// We use 'let' because these values will change during the game
let secretNumber;
let guessesRemaining;
let previousGuesses;

// --- GAME LOGIC FUNCTIONS ---

// Function to start a new game or reset the current one
function newGame() {
    // Generate a random number between 1 and 100
    secretNumber = Math.floor(Math.random() * 100) + 1;
    
    // Reset game state
    guessesRemaining = 10;
    previousGuesses = [];

    // Reset the UI
    guessesRemainingSpan.textContent = guessesRemaining;
    previousGuessesSpan.textContent = 'None';
    feedbackText.textContent = 'Make your first guess!';
    feedbackText.style.color = 'var(--text-color)';
    guessInput.value = '';
    
    // Re-enable the input and guess button, hide the play again button
    guessInput.disabled = false;
    guessBtn.disabled = false;
    playAgainBtn.style.display = 'none';
}

// Function to handle the end of the game
function endGame(isWin) {
    guessInput.disabled = true;
    guessBtn.disabled = true;
    playAgainBtn.style.display = 'block';

    if (isWin) {
        feedbackText.textContent = `🎉 You got it! The number was ${secretNumber}.`;
        feedbackText.style.color = 'var(--success-color)';
    } else {
        feedbackText.textContent = `😭 Game Over! The number was ${secretNumber}.`;
        feedbackText.style.color = 'var(--error-color)';
    }
}

// The main function that runs when a player makes a guess
function handleGuess() {
    // Get the user's guess and convert it to a number
    const userGuess = parseInt(guessInput.value);

    // --- VALIDATION ---
    // Using a truthy/falsy check for NaN, and checking the range
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedbackText.textContent = 'Please enter a valid number between 1 and 100.';
        feedbackText.style.color = 'var(--error-color)';
        return; // Stop the function here
    }
    
    // --- CORE GAME LOGIC ---
    guessesRemaining--; // Same as guessesRemaining = guessesRemaining - 1
    previousGuesses.push(userGuess);

    // Update the UI
    guessesRemainingSpan.textContent = guessesRemaining;
    previousGuessesSpan.textContent = previousGuesses.join(', '); // e.g., "50, 75, 60"
    guessInput.value = ''; // Clear the input for the next guess
    guessInput.focus(); // Keep the cursor in the input field

    // Using an if/else if/else chain to check the guess
    if (userGuess === secretNumber) {
        endGame(true); // Player won
    } else if (userGuess < secretNumber) {
        feedbackText.textContent = 'Too low! Try a higher number.';
        feedbackText.style.color = 'var(--warning-color)';
    } else { // userGuess > secretNumber
        feedbackText.textContent = 'Too high! Try a lower number.';
        feedbackText.style.color = 'var(--warning-color)';
    }
    
    // Check for game over condition (no guesses left)
    if (guessesRemaining === 0 && userGuess !== secretNumber) {
        endGame(false); // Player lost
    }
}

// --- EVENT LISTENERS ---
guessBtn.addEventListener('click', handleGuess);
playAgainBtn.addEventListener('click', newGame);

// Allow user to press Enter to guess
guessInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        handleGuess();
    }
});

// --- INITIALIZE GAME ---
// Start the game for the first time when the script loads
newGame();