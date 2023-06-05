'use strict';
//----------------------------- Виды Событий И Обработчиков Событий-----------------------

const h1 = document.querySelector('h1');
// const alertMouseEnterH1 = function (e) {
//   alert('addEventListener: You are now at the h1 element');
//   h1.removeEventListener('mouseenter', alertMouseEnterH1);
// };

const alertMouseEnterH1 = function (e) {
  alert('addEventListener: You are now at the h1 element');
};
h1.addEventListener('mouseenter', alertMouseEnterH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertMouseEnterH1), 5000);
// //-----------------------------old method------------------------------------------
// // h1.onclick = function (e) {
// //   alert('onclick: You have clicked the h1 element');
// // };
// //----------------------------or---------------------------
// // h1.onmouseenter = function (e) {
// //   alert('onmouseenter: You have onmouseenter the h1 element');
// // };
