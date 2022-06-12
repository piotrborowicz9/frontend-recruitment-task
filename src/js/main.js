'use strict';

//variables
const modal = document.querySelector('.modal');
const paragraph = document.querySelector('.alert-content');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const btnResetCounter = document.querySelector('.reset-counter');
let counter = parseInt(localStorage.getItem('counter') ?? '0');

//functions to start/stop user modal session
const modalSessionStart = () => {
    counter += 1;
    window.localStorage.setItem('counter', counter);
};
const modalSessionStop = () => {
    counter = 0;
    window.localStorage.setItem('counter', counter);
};

//functions to show/close modal
const showModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

//event listeners to show/close modal, start/reset user session
btnShowModal.forEach((e) => {
    e.addEventListener('click', () => {
        modalSessionStart();
        if (counter >= 5) {
            btnResetCounter.classList.remove('hidden');
        }

        showModal();
        paragraph.innerHTML = `You have clicked <b>${counter} times</b> to related button`;
    });
});

btnResetCounter.addEventListener('click', () => {
    modalSessionStop();
    btnResetCounter.classList.add('hidden');
    paragraph.innerHTML = `You have clicked <b>${counter} times</b> to related button`;
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//close modal with ESC key for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
