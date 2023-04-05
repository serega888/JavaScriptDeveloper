'use strict';
//------------------------------------------------ Операции С Датами-----------------------

const futureDate = new Date(2024, 0, 19, 11, 28, 59);
console.log('Number(futureDate) ', Number(futureDate));
console.log('+futureDate ', +futureDate);
console.log('-futureDate ', -futureDate);

const getDaysBetweenTwoDates = (date1, date2) =>
  Math.floor(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

const days = getDaysBetweenTwoDates(new Date(), new Date(2024, 0, 19));
console.log(days);
