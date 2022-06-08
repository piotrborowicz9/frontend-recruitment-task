"use strict";

const modal = document.querySelector(`.modal`);
const paragraph = document.querySelector(`.dupa`);
const overlay = document.querySelector(`.overlay`);
const btnShowModal = document.querySelector(`.show-modal`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnResetCounter = document.querySelector(`.reset-counter`);
let counter = 0;

const showModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};
const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

btnShowModal.addEventListener("click", function () {
  counter += 1;
  if (counter === 5) {
    btnResetCounter.classList.remove(`hidden`);
  }
  showModal();
  paragraph.textContent = `You clicked button ${counter} times`;
});

btnResetCounter.addEventListener(`click`, function () {
  counter = 0;
  btnResetCounter.classList.add(`hidden`);
  paragraph.textContent = `You clicked button ${counter} times`;
});
btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);
