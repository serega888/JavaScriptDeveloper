'use strict';
const header = document.querySelector('.header');

//-----------------------------------------------------------------------
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'Hello JavaScript! Нажми по кнопке Ок чтобы удалить! <button class="btn btn--close-cookie">Ок!</button>';

header.append(message);

const cookieMessage = document.querySelector('.btn--close-cookie');
cookieMessage.addEventListener('click', function () {
  message.remove();
});

//--------------------------------------------------------- Стили----------------------------------------

message.style.backgroundColor = '#076785';
message.style.width = '150%';
console.log('message.style.width ', message.style.width);
console.log('message.style.color ', message.style.color);
console.log('message.style.backgroundColor ', message.style.backgroundColor);

console.log(
  'getComputedStyle(message).color ',
  getComputedStyle(message).color
);

console.log('getComputedStyle(message) ', getComputedStyle(message));

console.log(
  'getComputedStyle(message).height ',
  getComputedStyle(message).height
);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 100 + 'px';
console.log('message.style.height ', message.style.height);

document.documentElement.style.setProperty('--color-first', 'yellow');

//--------------------------------------------------------------- Атрибуты----------------------------------------------------
const logo = document.querySelector('.nav__logo');
console.log('logo.alt ', logo.alt);
console.log('logo.src ', logo.src);
console.log("logo.getAttribute('src') ", logo.getAttribute('src'));
console.log('logo.className ', logo.className);

logo.alt = 'Лого  bank';

//------------------------------------------------------- Нестандартный атрибут-----------------------------------------------
console.log('logo.programmer ', logo.programmer); //undefined

console.log(
  "logo.getAttribute('programmer') ",
  logo.getAttribute('programmer')
);

logo.setAttribute('myRoot', 'Best Skills Of Programmers');

console.log("logo.getAttribute('myRoot') ", logo.getAttribute('myRoot'));

const link = document.querySelector('.nav__link--btn');
console.log('link.href ', link.href);
console.log("link.getAttribute('href') ", link.getAttribute('href'));

//------------------------------------------------------- Data attributes---------------------------------------------------

console.log(logo.dataset.versionMyNumber);

//---------------------------------------------------------- Classes------------------------------------------------

logo.classList.add('my_logo_two', 'my_logo_three');
logo.classList.remove('my_logo_two', 'my_logo_three');

console.log(
  "logo.classList.toggle('my_logo_four') ",
  logo.classList.toggle('my_logo_four')
);

console.log(
  "logo.classList.toggle('my_logo_three') ",
  logo.classList.toggle('my_logo_three')
);

console.log(
  "logo.classList.toggle('my_logo_three') ",
  logo.classList.toggle('my_logo_three')
);

logo.classList.contains('my_logo_two');

console.log(
  "logo.classList.contains('my_logo_two') ",
  logo.classList.contains('my_logo_two')
);

// Не использовать
// logo.className = 'my_logo_two';
