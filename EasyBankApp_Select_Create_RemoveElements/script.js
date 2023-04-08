'use strict';
//---------------------------------------------------------Select elements---------------------
console.log(
  'document.documentElement ',
  document.documentElement,
  typeof document.documentElement
);

console.log('document.head ', document.head, typeof document.head);

console.log('document.body ', document.body, typeof document.body);

console.log(
  "document.querySelector('.header') ",
  document.querySelector('.header'),
  typeof document.querySelector('.header')
);

const sectionsAll = document.querySelectorAll('.section'); // by class
console.log('sectionsAll ', sectionsAll);

const sectionsOne = document.querySelectorAll('#section--1'); // by id
console.log('sectionsOne ', sectionsOne);

const sectionTwo = document.getElementById('section--2');
console.log('sectionTwo ', sectionTwo);

const buttons = document.getElementsByTagName('button');
console.log('buttons ', buttons);

console.log(
  "document.getElementsByClassName('btn') ",
  document.getElementsByClassName('btn')
);
//---------------------------------------------------------Create and Insert elements---------------------
// .insertAdjacentHTML() // вставка элемента в HTML
const head = document.querySelector('.header');
// head.innerHTML = '';
const tit = `<div class="header__title">всё o JavaScript</div>`;
head.insertAdjacentHTML('afterbegin', tit);

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'Hello JavaScript! Нажми по надписи чтобы удалить!';

const header = document.querySelector('.header');
header.prepend(message);

//------------remove message-----------------------
const cookieMessage = document.querySelector('.cookie-message');
cookieMessage.addEventListener('click', function () {
  message.remove();
});

//-----------------------------------------------------------------------
const messageTwo = document.createElement('div');
messageTwo.classList.add('cookie-message-two');
messageTwo.textContent =
  'Hello JavaScript Two! Нажми по надписи чтобы удалить!';

header.append(messageTwo);

const cookieMessageTwo = document.querySelector('.cookie-message-two');
cookieMessageTwo.addEventListener('click', function () {
  messageTwo.parentElement.removeChild(messageTwo); // old approach
});

//-----------------------------------------------------------------------
const messageThree = message.cloneNode(true);
header.append(messageThree);
//header.before(messageThree);
//header.after(messageThree);

const cookieMessageThree = document.querySelector('.cookie-message');
cookieMessageThree.addEventListener('click', function () {
  messageThree.remove();
});
