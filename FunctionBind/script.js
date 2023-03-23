'use strict';

const airlineOne = {
  airlineName: 'SpaceSAF',
  iataCode: 'SAF',
  bookings: [],
  book(flightNumber, passengerName) {
    console.log(
      `${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNumber}`,
      passengerName,
    });
  },
};

airlineOne.book(333, 'Sergey Gray');
airlineOne.book(888, 'Sergey Fadin');
console.log(airlineOne);

const airlineTwo = {
  airlineName: 'SpaceGlobal',
  iataCode: 'SG',
  bookings: [],
};

//----------------------------------------------------------------------------------- Метод bind()----------------------------------------------------------
const book = airlineOne.book;

console.log('bind()');
const bookAirlineTwo = book.bind(airlineTwo);
bookAirlineTwo(555, 'Sergey Fadin');
console.log(airlineTwo);

const airlineThree = {
  airlineName: 'SpaceGlobalDarkHole',
  iataCode: 'SGDH',
  bookings: [],
};

const bookairlineThree = book.bind(airlineThree);
bookairlineThree(111, 'Sergey White');
console.log(airlineThree);

const bookairlineThreeFlightTwoHundredTwentyTwo = book.bind(airlineThree, 222);
bookairlineThreeFlightTwoHundredTwentyTwo('Sergey Green');
bookairlineThreeFlightTwoHundredTwentyTwo('Sergey Red');

// bind() with event listeners
airlineOne.airplanes = 700;
airlineOne.buyShip = function () {
  console.log(this);
  this.airplanes++;
  console.log(this.airplanes);
};

//airlineOne.buyShip(); // 701

document
  .querySelector('#buySpaceShip')
  .addEventListener('click', airlineOne.buyShip.bind(airlineOne));

// ------------------------Partial application
const getPercentage = (sumValue, percentValue) =>
  (percentValue / sumValue) * 100;
console.log(getPercentage(10000000, 20)); // 0.00019999999999999998
const getPercentageHundredMillion = getPercentage.bind(null, 1000000);
console.log(getPercentageHundredMillion(50)); // 0.005
