const cards = document.querySelectorAll('.card');

let cardFlipped = false;
let freezeGame = false;
let firstChoice, secondChoice;

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
}

        
    
    function check() {
        let match = firstChoice.dataset.manufacturer  === secondChoice.dataset.manufacturer;

        match ? freezeCard() : revertCard();
    }

    function freezeCard() {
        firstChoice.removeEventListener('click', flipCard);
        secondChoice.removeEventListener('click', flipCard);

        deIce();
    }
    
    function revertCard() {
        freezeGame = true;

        setTimeout(() => {
            firstChoice.classList.remove('flipped');
            secondChoice.classList.remove('flipped');
            deIce();
        } , 1250);
    }

    function deIce() {
        [cardFlipped, freezeGame] = [false, false];
        [firstChoice, secondChoice] = [null, null];
    }
       
    cards.forEach(card => card.addEventListener('click', flipCard) )
