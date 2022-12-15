'use strict';
//---------------------------------------------------------------------------- Функции Возвращающие Функции--------------------------------------------

const greet = function (greetingText) {
  return function (name) {
    console.log(`${greetingText} ${name}!`);
  };
};

const hi = greet('Hi');
hi('Sergey');
hi('White');
hi('Black');

greet('Hey')('Green');

// -------------arrGreet() arrow function
const arrGreet = greetingText => name =>
  console.log(`${greetingText} ${name}!`);

arrGreet('Hello')('Red');
