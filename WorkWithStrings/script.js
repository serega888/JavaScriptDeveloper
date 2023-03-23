'use strict';

// ---------------------------------------------------------------Work with strings------------------------------------------------------------------
const airline = 'Mars Airline';
const airplane = 'SpaceSAF 7387';

console.log(airplane[0]);
console.log(airplane[1]);
console.log(airplane[2]);
console.log('Mars'[0]);

console.log(airline.length);
console.log('SpaceSAF 7387'.length);

console.log(airplane.indexOf(' '));
console.log(airplane.indexOf('7'));
console.log(airplane.lastIndexOf('7'));
console.log(airline.indexOf('ma'));

console.log(airplane.slice(7));
console.log(airplane);
console.log(airplane.slice(0, 6));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airplane.slice(airplane.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(2, -2));

const checkMiddleSeat = function (seat) {
  // B and E are middle seat
  const seatLetter = seat.slice(-1);
  if (seatLetter === 'B' || seatLetter === 'E') {
    console.log('This is a middle seat.');
  } else {
    console.log('This is not a middle seat.');
  }
};

checkMiddleSeat('101A');
checkMiddleSeat('78B');
checkMiddleSeat('10E');

const x = new String('Hello');
console.log(typeof x);
console.log(typeof x.slice(2));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix the passenger name
const fixPassengerName = function (passengerName) {
  const normalPassengerName =
    passengerName[0].toUpperCase() + passengerName.toLowerCase().slice(1);
  console.log(normalPassengerName);
};
const passengerName = 'SeRGey'; // Sergey
fixPassengerName(passengerName);

// Email validation
const email = 'anyemail@gmail.com';
const loginEmail = '  AnyEmail@Gmail.com \n';

const emailLower = loginEmail.toLowerCase();
const emailTrimmed = emailLower.trim();
console.log(emailTrimmed);

const emailNormalized = loginEmail.toLowerCase().trim();
console.log(emailNormalized);
console.log(email === emailNormalized);

// Replacing
const ticketPriceEU = '398000,43€';
const ticketPriceUS = ticketPriceEU.replace(',', '.').replace('€', '$');
console.log(ticketPriceUS);

const announcement =
  'All passengers of flight SpaceMars2034 come to boarding door 33. Boarding door 33!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

// Methods return boolean
console.log(airplane);
console.log(airplane.includes('7387'));
console.log(airplane.includes('739'));

console.log(airplane.startsWith('Spa'));
console.log(airplane.startsWith('Sa'));
console.log(airplane.startsWith('7387'));

console.log(airplane.endsWith('7387'));
console.log(airplane.endsWith('SpaceSAF'));

const airplane1 = 'AirSAF';

if (airplane.startsWith('SpaceSAF')) {
  console.log('You gonna fly on SpaceSAF!');
}

if (airplane1.startsWith('SpaceSAF')) {
  console.log('You gonna fly on SpaceSAF!');
}

//---------------------------------- Example
const checkLuggage = function (luggage) {
  const luggageLower = luggage.toLowerCase();
  if (
    luggageLower.includes('laser knife') ||
    luggageLower.includes('gun laser')
  ) {
    console.log(`You are not allowed on the space ship with ${luggage}`);
  } else {
    console.log(`Welcome on the space ship with ${luggage}`);
  }
};

const luggageOne = 'FoodBattery, Space Suit, and Laser Knife';
const luggageTwo = 'Helmet brain computer and food battery';
const luggageThree = 'Camera glasses, food battery, Gun laser';

checkLuggage(luggageOne);
checkLuggage(luggageTwo);
checkLuggage(luggageThree);

// ----------------split() and join()
console.log('My+name+is+Sergey.'.split('+'));
console.log('Sergey Fadin'.split(' '));

const [firstName, lastName] = 'Sergey Fadin'.split(' ');
console.log(firstName, lastName);

console.log(['Mr.', firstName, lastName.toUpperCase()].join(' '));

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesCapitalized = [];
  for (const n of names) {
    // namesCapitalized.push(n[0].toUpperCase() + n.slice(1));
    namesCapitalized.push(n.replace(n[0], n[0].toUpperCase()));
  }
  const capitalizedFullName = namesCapitalized.join(' ');
  return capitalizedFullName;
};

console.log(capitalizeName('sergey fadin'));
console.log(capitalizeName('space saf ship.'));

// Padding
const message = 'Hello everybody!';
console.log(message.padStart(37, '-').padEnd(47, '-'));

const maskCreditCard = function (cardNumber) {
  const strCardNumber = cardNumber.toString();
  const lastFour = strCardNumber.slice(-4);
  return lastFour.padStart(strCardNumber.length, '*');
};

console.log(maskCreditCard(14154455599415));
console.log(maskCreditCard('1251543661261363616146326'));

// repeat()
const greeting = 'Hello!';
console.log(greeting.repeat(20));

const howMuchYouLoveMoney = function (loveNumber) {
  console.log(`I love ${'! '.repeat(loveNumber)}`);
};

howMuchYouLoveMoney(88);
