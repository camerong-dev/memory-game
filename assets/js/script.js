/*jshint esversion: 6 */

// Functions flipCard, check, freezeCard, revertCard and deIce were taken from online tutorial

const cards = document.querySelectorAll('.card');
var time = document.getElementById('timer');
const startBtn = document.getElementById('start-game');

let cardFlipped = false;
let freezeGame = false;
let firstChoice, secondChoice;
let timeLeft = 10;
let timeId;

// Function to hide the overlay

function hideOverlay() {
    document.getElementById('overlay').style.display = 'none';
}

// Function to show the reset button when game starts

function showReset() {
    document.getElementById('reset-btn').style.display = 'flex';
}


// Start game button starts the timer and calls hide overlay function


function startGame() {
    hideOverlay()
    showReset()
    timeId = setInterval(() => {
        timeLeft--;
        updateCountdown();
        countdown();
    },
    1000);
}


startBtn.addEventListener('click', startGame);


// Function checks to see if it is 1st or 2nd click.  If 1st, no further action. If 2nd, check function is called

function flipCard() {
    if (freezeGame) return;
    if (this === firstChoice) return;
    
    this.classList.add('flipped');

    if (!cardFlipped) {
        cardFlipped = true;
        firstChoice = this;

        return;

    } 

    secondChoice = this;
    check();
    checkWin();
}

// Function looks to see if 1st and 2nd choice match. If match it calls upon freezeCard, if not revertCard is called        
    
    function check() {
        let match = firstChoice.dataset.manufacturer  === secondChoice.dataset.manufacturer;

        match ? freezeCard() : revertCard();
    }

// Function freezes card if matches then calls upon deIce to reset the board to continue with next choices

    function freezeCard() {
        firstChoice.removeEventListener('click', flipCard);
        secondChoice.removeEventListener('click', flipCard);

        deIce();
    }
    
// If cards do not match, cards will revert back to original state after 1.25 seconds

    function revertCard() {
        freezeGame = true;

        setTimeout(() => {
            firstChoice.classList.remove('flipped');
            secondChoice.classList.remove('flipped');
            deIce();
        } , 1250);
    }

// Resets 1st and 2nd choice, as well as resetting cardFlipped function so a new card can be selected

    function deIce() {
        [cardFlipped, freezeGame] = [false, false];
        [firstChoice, secondChoice] = [null, null];
    }

// Checks if all cards have flipped class, if so then alert appears
    function checkWin() {
        let matched = true;
        cards.forEach(card => {
            if (!card.classList.contains('flipped')) {
                matched = false;
            }
        });
        if (matched) {
            alert("You won!");
        }
    }

// Randomizes cards every time page is refreshed

    (function randomize() {
        cards.forEach(card => {
            let shuffle = Math.floor(Math.random() * 16);
            card.style.order = shuffle;
        });
    })();

    cards.forEach(card => card.addEventListener('click', flipCard) );


// Countdown timer

    function countdown() {
        if (timeLeft == 0) {
            clearInterval(timeId);
            alert("Game Over! You ran out of time.");
        } 
        else {
            updateCountdown(timeLeft);
        }
    }

// Updates the remaining time which the end user sees    

    function updateCountdown(timeLeft) {
        time.textContent = `Time Remaining: ${timeLeft} seconds`;
    }

