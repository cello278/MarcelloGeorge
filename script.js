// Wait for DOM content to finish loading
document.addEventListener('DOMContentLoaded', () => {
    
    // Select Game Elements
    const gasBtn = document.getElementById('gas-btn');
    const speedDisplay = document.getElementById('speed-display');
    const timeDisplay = document.getElementById('time-display');
    const gameStatus = document.getElementById('game-status');

    // Game Variables
    let currentSpeed = 0;
    let timeLeft = 10;
    let gameActive = false;
    let timerInterval = null;

    // Click handler for the Accelerate button
    gasBtn.addEventListener('click', () => {
        
        // Start game on first click
        if (!gameActive && timeLeft === 10) {
            startGame();
        }

        // If game is running, boost speed
        if (gameActive) {
            currentSpeed += 4;
            speedDisplay.textContent = currentSpeed;

            // Check if player reaches 88 MPH
            if (currentSpeed >= 88) {
                winGame();
            }
        }
    });

    // Function to start timer
    function startGame() {
        gameActive = true;
        gameStatus.textContent = "⚡ PUSH IT TO 88 MPH!";
        
        timerInterval = setInterval(() => {
            timeLeft--;
            timeDisplay.textContent = timeLeft;

            if (timeLeft <= 0) {
                endGame(false);
            }
        }, 1000);
    }

    // Function for winning
    function winGame() {
        clearInterval(timerInterval);
        gameActive = false;
        gameStatus.textContent = "🔥 88 MPH REACHED! FLUX CAPACITOR ACTIVATED!";
        gasBtn.textContent = "PLAY AGAIN 🔄";
        resetGameTrigger();
    }

    // Function for losing / running out of time
    function endGame(won) {
        clearInterval(timerInterval);
        gameActive = false;
        gameStatus.textContent = "💥 Out of time! You didn't make it to 88 MPH.";
        gasBtn.textContent = "TRY AGAIN 🔄";
        resetGameTrigger();
    }

    // Prepare game for restart
    function resetGameTrigger() {
        // Setup button to reset stats on next click
        gasBtn.onclick = () => {
            currentSpeed = 0;
            timeLeft = 10;
            speedDisplay.textContent = "0";
            timeDisplay.textContent = "10";
            gameStatus.textContent = "Click Accelerate to start!";
            gasBtn.textContent = "ACCELERATE! 🏎️💨";
            
            // Re-attach normal game click logic
            gasBtn.onclick = null;
        };
    }
});
