'use strict';
// --------------------------------------------------------------------------Методы call(), apply()----------------------------------------------------

const bookAirLine = function (flightNumber, passengerName) {
  console.log(
    `${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`
  );
  this.bookings.push({
    flight: `${this.iataCode}${flightNumber}`,
    passengerName,
  });
};

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

const book = airlineOne.book;

// ----------This doesn't work
// ----------book(333, 'Sergey Brown');

// ----------------call()
book.call(airlineTwo, 222, 'Sergey Green');
console.log(airlineTwo);

book.call(airlineOne, 111, 'Sergey Yellow');
console.log(airlineOne);

// apply() - old approach
const flightData = [111, 'Sergey Red'];
book.apply(airlineTwo, flightData);

book.call(airlineTwo, ...flightData);
console.log(airlineTwo);

const airlineBook = {
  airlineName: 'SpaceSAF',
  iataCode: 'SAF',
  bookings: [],
};

const airlineBookTwo = {
  airlineName: 'SpaceGlobal',
  iataCode: 'SG',
  bookings: [],
};
// ----------------call()
bookAirLine.call(airlineBook, 555, 'Sergey Black');
console.log(airlineBook);

bookAirLine.call(airlineBookTwo, 777, 'Sergey Blue');
console.log(airlineBookTwo);

// apply() - old approach
const flightDataTwo = [111, 'Sergey Dark Grey'];
book.apply(airlineBookTwo, flightDataTwo);

// ----------------call()
bookAirLine.call(airlineBook, ...flightDataTwo);
console.log(airlineBook);
