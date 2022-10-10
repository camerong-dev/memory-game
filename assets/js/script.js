let cards = document.querySelectorAll('.card');

let cardFlipped = false;
let firstChoice, secondChoice;

function flipCard() {
    if (this === firstChoice) return;

    this.classList.toggle('flip');

    if (!cardFlipped) {
        cardFlipped = true;
        firstChoice = this;
    } else {
        cardFlipped = false;
        secondChoice = this;
    
        if (firstChoice.dataset.cardid === secondChoice.dataset.cardid) {
        firstChoice.removeEventListener('click', flipCard);
        secondChoice.removeEventListener('click', flipCard);
        } else {
            setTimeout(() => {
            firstChoice.classList.remove('flip');
            secondChoice.classList.remove('flip');
        } , 1750);
    }
        
    }
}

cards.forEach(card => card.addEventListener('click', flipCard) )

