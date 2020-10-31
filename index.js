let viewAllButton = document.querySelector('.view-all-first');
let mainCards = document.querySelector('.main-cards');


viewAllButton.addEventListener('click', (e) => {
    mainCards.style.maxHeight = 'none';
})