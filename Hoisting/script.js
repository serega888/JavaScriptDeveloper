'use strict';
// // -----------------------------------------------------------------------------------Hoisting-------------------------------------------------------------

// // --------------Variables Hoisting
// console.log(firstName);
// // console.log(job);
// // console.log(MybirthYear);

// var firstName = 'YouRa';
// let job = 'programmer';
// const MybirthYear = 1974;

// // -------------Functions Hoisting

// console.log(declSum(1, 2));
// // console.log(exprSum(1, 2));
// console.log(arrSum);
// // console.log(arrSum(1, 2));

// function declSum(a, b) {
//   return a + b;
// }

// const exprSum = function (a, b) {
//   return a + b;
// };

// var arrSum = (a, b) => a + b;

// // Example Hoisting

// console.log(isUserValid);

// if (!isUserValid) {
//   deleteUser();
// }

// var isUserValid = true;

// function deleteUser() {
//   console.log('User is deleted!');
// }

// var a = 1;
// let b = 2;
// const c = 3;

// console.log(a === window.a);
// console.log(b === window.b);
// console.log(c === window.c);
