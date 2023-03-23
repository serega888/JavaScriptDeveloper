'use strict';
// ---------------------------------------------------------------Function passing arguments. Value vs Reference-----------------------------------------

const flightNumber = 'SAF3388';
const passenger333 = {
  firstName: 'Sergey',
  lastName: 'Fadin',
  passport: 888888,
};

const checkIn = function (flight, passenger) {
  flight = flight.toLowerCase();
  passenger.firstName = passenger.firstName.toLowerCase();
  passenger.lastName = passenger.lastName.toLowerCase();

  if (passenger.passport === 888888) {
    console.log('Welcome to the space ship!');
  } else {
    console.log('Incorrect passport!');
  }
};

checkIn(flightNumber, passenger333);
console.log(flightNumber);
console.log(passenger333);

// This is the same as doing it
const flight = flightNumber;
const passenger = passenger333;

const changePassportNumber = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

changePassportNumber(passenger333);
checkIn(flightNumber, passenger333);
