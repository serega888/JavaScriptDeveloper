'use strict';
// const modalWindow = document.querySelector('.modal-window');
// const overlay = document.querySelector('.overlay');
// const btnsCloseModalWindow = document.querySelector('.close-modal-window');
// const btnsShowModalWindow = document.querySelectorAll('.show-modal-window');
// console.log(btnsCloseModalWindow);

// for (let i = 0; i < btnsShowModalWindow.length; i++) {
//   console.log(btnsShowModalWindow[i].textContent);
// }
//------------------------------Work with Class-----------------------
const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.close-modal-window');
const btnsShowModalWindow = document.querySelectorAll('.show-modal-window');

const showModalWindow = function () {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModalWindow.length; i++) {
  btnsShowModalWindow[i].addEventListener('click', showModalWindow);
}

btnCloseModalWindow.addEventListener('click', closeModalWindow);

overlay.addEventListener('click', closeModalWindow);
