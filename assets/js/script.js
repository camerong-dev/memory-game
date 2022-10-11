let cards = document.querySelectorAll('.card');

let cardFlipped = false;
let firstChoice, secondChoice;

function flipCard() {
    if (this === firstChoice) return;

    this.classList.add('flip');

    if (!cardFlipped) {
        cardFlipped = true;
        firstChoice = this;

        return;

    } 

    secondChoice = this;
    check();
}

        
    
    function check() {
        let match = firstChoice.dataset.cardid  === secondChoice.dataset.cardid;

        match ? freezeCard() : revertCard();
    }

    function freezeCard() {
        firstChoice.removeEventListener('click', flipCard);
        secondChoice.removeEventListener('click', flipCard);
    }
    
    function revertCard() {
        setTimeout(() => {
            firstChoice.classList.remove('flip');
            secondChoice.classList.remove('flip');
        } , 1250);
    }
        
   
            



cards.forEach(card => card.addEventListener('click', flipCard) )
