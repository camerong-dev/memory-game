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

        
    
    function check() {
        let match = firstChoice.dataset.cardid  === secondChoice.dataset.cardid;

            if (match === freezeCard)
                freezeCard();

            else 
                revertCard();
    }
    
    function revertCard() {
        setTimeout(() => {
            firstChoice.classList.remove('flip');
            secondChoice.classList.remove('flip');
        } , 1250);
    }
        
    function freezeCard() {
        firstChoice.removeEventListener('click', flipcard);
        secondChoice.removeEventListener('click', flipcard);
    }
            
    }


cards.forEach(card => card.addEventListener('click', flipCard) )

