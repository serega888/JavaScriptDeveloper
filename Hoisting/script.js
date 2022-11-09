'use strict';
// -----------------------------------------------------------------------------------Hoisting-------------------------------------------------------------

// --------------Variables Hoisting
console.log(firstNameHoisting);
// console.log(jobHoisting);
// console.log(MybirthYearHoisting);

var firstNameHoisting = 'Sergey';
let jobHoisting = 'programmer';
const MybirthYearHoisting = 1992;

// -------------Functions Hoisting

console.log(declSumHoisting(1, 2));
// console.log(exprSumHoisting(1, 2));
console.log(arrSumHoisting);
// console.log(arrSumHoisting(1, 2));

function declSumHoisting(a, b) {
  return a + b;
}

const exprSumHoisting = function (a, b) {
  return a + b;
};

var arrSumHoisting = (a, b) => a + b;

// Example Hoisting

console.log(isUserValidHoisting);

if (!isUserValidHoisting) {
  deleteUserHoisting();
}

var isUserValidHoisting = true;

function deleteUserHoisting() {
  console.log('User is deleted!');
}

var a = 1;
let b = 2;
const c = 3;

console.log(a === window.a);
console.log(b === window.b);
console.log(c === window.c);
