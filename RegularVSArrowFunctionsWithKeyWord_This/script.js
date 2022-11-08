'use strict';
// -----------------------------------------------------------------Regular VS Arrow Functions With Keyword This-----------------------------------------------

// var firstName = 'Jack';

// const user187 = {
//   firstName: 'YouRa',
//   MybirthYear: 1974,
//   getAge: function () {
//     console.log(this);
//     console.log(2021 - this.MybirthYear);

//     // Old approach before ES6
//     // const self = this; // self or that
//     // const isAdult = function () {
//     //   console.log(self);
//     //   console.log(2021 - self.MybirthYear >= 18);
//     //   // console.log(2021 - this.MybirthYear >= 18);
//     // };

//     // New approach after ES6
//     const isAdult = () => {
//       console.log(this);
//       console.log(2021 - this.MybirthYear >= 18);
//     };

//     isAdult();
//   },
//   sayGreeting: function () {
//     // console.log(this);
//     console.log(`Hello, I'm ${this.firstName}`);
//   },
// };

// user187.sayGreeting();
// user187.getAge();
// // console.log(this.firstName);

// // arguments keyword
// const exprSum = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// exprSum(1, 2);
// exprSum(1, 2, 3, 9, 34);

// var arrSum = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// arrSum(7, 11, 23);
