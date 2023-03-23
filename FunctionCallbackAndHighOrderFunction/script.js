'use strict';
// ------------------------------------------------------------Функции Принимающие Callback Функции--------------------------------------------------------

const removeSpaces = function (text) {
  return text.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (text) {
  const [first, ...others] = text.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order Function
const converter = function (str, func) {
  console.log(`The original text: ${str}`);
  console.log(`The converted text: ${func(str)}`);

  console.log(`Converted by function: ${func.name}`);
};
const str = 'Welcome to the space!';
converter(str, upperFirstWord);
converter(str, removeSpaces);

// Callback functions are very common in JS
const arr = [111, 2222, 44444];
const twice = num => console.log(num * 2);
arr.forEach(twice);
