'use strict';
// -----------------------------------------------------------------Regular VS Arrow Functions With Keyword This-----------------------------------------------

var firstName = 'Jack';

const userRegularVSArrowFunction387 = {
  firstName: 'Sergey',
  MybirthYear: 1992,
  getAge: function () {
    console.log(this);
    console.log(2022 - this.MybirthYear);

    // Old approach before ES6
    // const self = this; // self or that
    // const isAdultRegularVSArrowFunction = function () {
    //   console.log(self);
    //   console.log(2022 - self.MybirthYear >= 18);
    //   // console.log(2022 - this.MybirthYear >= 18);
    // };

    // New approach after ES6
    const isAdultRegularVSArrowFunction = () => {
      console.log(this);
      console.log(2022 - this.MybirthYear >= 18);
    };

    isAdultRegularVSArrowFunction();
  },
  sayGreetingRegularVSArrowFunction: function () {
    // console.log(this);
    console.log(`Hello, I'm ${this.firstName}`);
  },
};

userRegularVSArrowFunction387.sayGreetingRegularVSArrowFunction();
userRegularVSArrowFunction387.getAge();
// console.log(this.firstName);

// arguments keyword
const exprSumRegularVSArrowFunction = function (a, b) {
  console.log(arguments);
  return a + b;
};

exprSumRegularVSArrowFunction(10, 20);
exprSumRegularVSArrowFunction(10, 20, 30, 90, 340);

var arrSumRegularVSArrowFunction = (a, b) => {
  //console.log(arguments);
  return a + b;
};

arrSumRegularVSArrowFunction(70, 110, 230);
