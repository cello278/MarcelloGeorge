// Wait for DOM content to finish loading
document.addEventListener('DOMContentLoaded', () => {
    
    // Select Game Elements
    const gasBtn = document.getElementById('gas-btn');
    const shiftBtn = document.getElementById('shift-btn');
    const speedDisplay = document.getElementById('speed-display');
    const gearDisplay = document.getElementById('gear-display');
    const timeDisplay = document.getElementById('time-display');
    const gameStatus = document.getElementById('game-status');

    // Game Variables
    let speed = 0;
    let gear = 1;
    let maxSpeedForGear = 30; // Gear 1 caps out at 30 MPH
    let timeLeft = 7;
    let gameActive = false;
    let timerInterval = null;
    let decayInterval = null;

    // Click GAS
    gasBtn.addEventListener('click', () => {
        if (!gameActive && timeLeft === 7) {
            startGame();
        }

        if (gameActive) {
            // Speed increases if under max gear limit
            if (speed < maxSpeedForGear) {
                speed += 5;
            } else {
                gameStatus.textContent = "⚠️ REVLIMITER HIT! SHIFT GEAR NOW!";
            }

            speedDisplay.textContent = speed;

            if (speed >= 88) {
                winGame();
            }
        }
    });

    // Click SHIFT GEAR
    shiftBtn.addEventListener('click', () => {
        if (gameActive) {
            if (speed >= maxSpeedForGear - 5) {
                gear++;
                gearDisplay.textContent = gear;
                maxSpeedForGear += 30; // Unlock higher speed limit
                gameStatus.textContent = `⚙️ Shifted to Gear ${gear}! Keep pushing!`;
            } else {
                gameStatus.textContent = "❌ Shifted too early! Lost speed!";
                speed = Math.max(0, speed - 10);
                speedDisplay.textContent = speed;
            }
        }
    });

    // Start Game Loops
    function startGame() {
        gameActive = true;
        gameStatus.textContent = "🔥 PUSH GAS AND SHIFT AT THE RIGHT TIME!";

        // Timer Loop (7 Seconds)
        timerInterval = setInterval(() => {
            timeLeft--;
            timeDisplay.textContent = timeLeft;

            if (timeLeft <= 0) {
                endGame();
            }
        }, 1000);

        // Speed Decay Loop (Loses 2 MPH every 300ms)
        decayInterval = setInterval(() => {
            if (gameActive && speed > 0) {
                speed = Math.max(0, speed - 2);
                speedDisplay.textContent = speed;
            }
        }, 300);
    }

    // Win Condition
    function winGame() {
        stopIntervals();
        gameActive = false;
        gameStatus.textContent = "💥 88 MPH REACHED! TIME TRAVEL UNLOCKED!";
        gasBtn.textContent = "PLAY AGAIN 🔄";
        resetGameTrigger();
    }

    // Fail Condition
    function endGame() {
        stopIntervals();
        gameActive = false;
        gameStatus.textContent = "❌ Out of time! You didn't reach 88 MPH.";
        gasBtn.textContent = "TRY AGAIN 🔄";
        resetGameTrigger();
    }

    function stopIntervals() {
        clearInterval(timerInterval);
        clearInterval(decayInterval);
    }

    // Reset Game State
    function resetGameTrigger() {
        gasBtn.onclick = () => {
            speed = 0;
            gear = 1;
            maxSpeedForGear = 30;
            timeLeft = 7;
            
            speedDisplay.textContent = "0";
            gearDisplay.textContent = "1";
            timeDisplay.textContent = "7";
            gameStatus.textContent = "Click GAS to start!";
            gasBtn.textContent = "GAS! 🏎️💨";
            
            gasBtn.onclick = null;
        };
    }
});
