'use strict';
// -----------------------------------------------------------------------Метод fill arrays---------------------------------------------------------

console.log('new Array(1,2,3)', new Array(1, 2, 3));
console.log('-----------------------------------');

console.log('new Array(3)', new Array(3));
console.log('-----------------const arr = new Array(3)------------------');
const arr = new Array(3);
console.log(
  'arr.map(() => 7)',
  arr.map(() => 7)
);
console.log('----------method fill()-------------------------');
console.log('arr.fill(7)', arr.fill(7));
console.log('------------------const arrTwo = new Array(3)-----------------');
const arrTwo = new Array(3);
console.log('arrTwo.fill(7, 1)', arrTwo.fill(7, 1));
console.log('-----------------------------------');
console.log('------------------const arrThree = new Array(3)-----------------');
const arrThree = new Array(3);
console.log('arrThree.fill(7, 1, 2)', arrThree.fill(7, 1, 2));
console.log('-----------------------------------');
console.log(
  '------------------const arrFour = [1, 1, 1, 1, 1]-----------------'
);
const arrFour = [1, 1, 1, 1, 1];
console.log('arrFour.fill(7, 2, 4)', arrFour.fill(7, 2, 4));
console.log('-----------------------------------');
console.log(
  '------------------Array.from({length:5}, () => 1)-----------------'
);
console.log(
  'Array.from({length:5}, () => 1)',
  Array.from({ length: 5 }, () => 1)
);
console.log('-----------------------------------');
console.log(
  '------------------Array.from({length:5}, (item, index) => index + 1)-----------------'
);
console.log(
  'Array.from({length:5}, (item, index) => index + 1)',
  Array.from({ length: 5 }, (item, index) => index + 1)
);
console.log('-----------------------------------');
console.log(
  '------------------Array.from({length:5}, (_, index) => index + 1)-----------------'
);
console.log(
  'Array.from({length:5}, (_, index) => index + 1)',
  Array.from({ length: 5 }, (_, index) => index + 1)
);
console.log('-----------------------------------');
