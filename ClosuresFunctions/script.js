'use strict';
// ----------------------------------------------------------------------Замыкания (Closures)------------------------------------------------------------

const safeBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = safeBooking();

booker();
booker();
booker();

console.dir(booker);

//------------------------------------------------- Больше Примеров О Closures

// ---------------------------Example 1

let f1;

const f2 = function () {
  const x = 11;
  f1 = function () {
    console.log(x ** 2);
  };
};

const f3 = function () {
  const y = 12;
  f1 = function () {
    console.log(y ** 2);
  };
};

f2();
f1();
console.dir(f1);

f3();
f1();
console.dir(f1);

//--------------------------Example 2

const boardPassengers = function (passengerNumber, secondsBeforeBoarding) {
  const passengersInGroup = passengerNumber / 2;

  setTimeout(function () {
    console.log(`All ${passengerNumber} passengers are now boarding`);
    console.log(`Each group contains ${passengersInGroup} passengers`);
  }, secondsBeforeBoarding * 1000);

  console.log(`The boarding will start in ${secondsBeforeBoarding} seconds`);
};

const passengersInGroup = 1500;
boardPassengers(150, 5);

//--------------------------Example 3

const boardPassengersThree = function (
  passengerNumberThree,
  secondsBeforeBoardingThree
) {
  //const passengersInGroupThree = passengerNumberThree / 2;

  setTimeout(function () {
    console.log(`All ${passengerNumberThree} passengers are now boarding`);
    console.log(`Each group contains ${passengersInGroupThree} passengers`);
  }, secondsBeforeBoardingThree * 1000);

  console.log(
    `The boarding will start in ${secondsBeforeBoardingThree} seconds`
  );
};

const passengersInGroupThree = 2500;
boardPassengersThree(250, 10);
