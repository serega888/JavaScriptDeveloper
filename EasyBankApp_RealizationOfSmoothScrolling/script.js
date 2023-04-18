'use strict';
//---------------------------------------------------------Modal window---------------------

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll(
  '.btn--show-modal-window'
);
const btnScrollTo = document.querySelector('.btn--scroll-to');
const sectionOne = document.querySelector('#section--1');

const openModalWindow = function (e) {
  e.preventDefault();
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModalWindow.forEach(btn =>
  btn.addEventListener('click', openModalWindow)
);

btnCloseModalWindow.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindow();
  }
});

btnScrollTo.addEventListener('click', function (e) {
  // const sectionOneCoordinates = sectionOne.getBoundingClientRect();
  // console.log('sectionOneCoordinates ', sectionOneCoordinates);

  // console.log(
  //   'e.target.getBoundingClientRect() ',
  //   e.target.getBoundingClientRect()
  // );

  // console.log(
  //   'Current scrolling: window.scrollX, window.scrollY',
  //   window.scrollX,
  //   window.scrollY
  // );

  // console.log(
  //   'Width and Height viewport ',
  //   document.documentElement.clientWidth,
  //   document.documentElement.clientHeight
  // );

  // window.scrollTo(
  //   sectionOneCoordinates.left + window.scrollX,
  //   sectionOneCoordinates.top + window.scrollY
  // );

  // window.scrollTo({
  //   left: sectionOneCoordinates.left + window.scrollX,
  //   top: sectionOneCoordinates.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  sectionOne.scrollIntoView({ behavior: 'smooth' });
});
