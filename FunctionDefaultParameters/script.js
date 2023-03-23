'use strict';
// --------------------------------------------------------------- Function Default Parameters----------------------------------------------------------------

const bookings = [];

const makeBooking = function (
  flightNum,
  passengersNum = 1,
  price = 99 * passengersNum
) {
  // Before ES6
  // passengersNum = passengersNum || 1;
  // price = price || 99;

  const booking = {
    flightNum,
    passengersNum,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

makeBooking('SAF333');
makeBooking('SAF888', 2, 599);
makeBooking('SAF333', 3);
makeBooking('SAF333', 4);
makeBooking('SAF333', undefined, 500);
