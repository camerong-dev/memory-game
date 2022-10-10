let cards = document.querySelectorAll('.card');

let cardFlipped = false;
let firstChoice, secondChoice;

function flipCard() {
    if (this === firstChoice) return;

    this.classList.toggle('flip');

    if (!cardFlipped) {
        cardFlipped = true;
        firstChoice = this;

        return;
    }

    secondChoice = this;

    check();
}

function check() {
    let match = firstChoice === secondChoice;

    console.log('match');
}

cards.forEach(card => card.addEventListener('click', flipCard) )

