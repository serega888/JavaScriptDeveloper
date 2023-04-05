'use strict';
// --------------------------------------------------------Работа С Датами-----------------------------

//------------------------------------- Создание дат----------------------------

const now = new Date();
console.log(now);

const someDateString = 'Oct 31 2022 11:35:43';
const someDate = new Date(someDateString);
console.log('someDate ', someDate);
console.log("new Date('Dec 31 2022') ", new Date('Dec 31 2022'));

const account1 = {
  userName: 'Sergey Bray',
  transactions: [5000, 2500, -3000, 50000, -8500, -1100, -1700, 11000, 200.25],
  interest: 1.5,
  pin: 11111,
  transactionsDates: [
    '2022-10-03T14:43:31.074Z',
    '2022-10-05T11:24:19.761Z',
    '2022-11-15T10:45:23.907Z',
    '2022-01-22T12:17:46.255Z',
    '2022-02-12T15:14:06.486Z',
    '2022-03-10T11:42:26.371Z',
    '2022-05-21T07:43:59.331Z',
    '2022-06-23T15:21:20.814Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

console.log(
  'new Date(account1.transactionsDates[0]) ',
  new Date(account1.transactionsDates[0])
);

console.log(
  'new Date(2024, 2, 20, 11, 28, 59) ',
  new Date(2024, 2, 20, 11, 28, 59)
);

console.log('new Date(2024, 0, 32) ', new Date(2024, 0, 32));

//-------------------------- Unix time started Jan 1 1970
console.log('new Date(0) ', new Date(0)); // Thu Jan 01 1970 03:00:00 GMT+0300;

console.log(
  'new Date(1 * 24 * 60 * 60 * 1000) ',
  new Date(1 * 24 * 60 * 60 * 1000)
); // Fri Jan 02 1970 03:00:00 GMT+0300

console.log(
  'new Date(7 * 24 * 60 * 60 * 1000) ',
  new Date(7 * 24 * 60 * 60 * 1000)
); // Thu Jan 08 1970 03:00:00 GMT+0300

// ------------------------------------Работа С Датами При помощи Методов---------------------

const futureDate = new Date(2024, 0, 19, 11, 28, 59);
console.log('futureDate ', futureDate);
console.log('futureDate.getFullYear() ', futureDate.getFullYear());
console.log('futureDate.getMonth() ', futureDate.getMonth());
console.log('futureDate.getDate() ', futureDate.getDate());
console.log('futureDate.getDay() ', futureDate.getDay());
console.log('futureDate.getHours() ', futureDate.getHours());
console.log('futureDate.getMinutes() ', futureDate.getMinutes());
console.log('futureDate.getSeconds() ', futureDate.getSeconds());
console.log('futureDate.toISOString() ', futureDate.toISOString());
console.log('futureDate.getTime() ', futureDate.getTime());
console.log('new Date(7956091739000) ', new Date(7956091739000));
console.log('Date.now() ', Date.now());

futureDate.setFullYear(2026);
console.log('futureDate', futureDate);

console.log('futureDate.setFullYear(2025) ', futureDate.setFullYear(2025));
