'use strict';
// -----------------------------------------------------------------------Метод reduce()--------------------------------------------------------------
//------------------------------------
const transactions = [
  3000, 2500, -5000, 50000, -7500, -1800, 500, 14000, -3500, -1200,
];

const balance = transactions.reduce(function (acc, item, index, array) {
  return acc + item;
}, 0);

console.log('transactions', transactions);
console.log('balance', balance);

//-----------------------------------

const transactionsTwo = [30000, 500000, 100000, -3000, 40000];
let balanceTwo = 0;

for (const trans of transactionsTwo) {
  balanceTwo += trans;
}

console.log('transactionsTwo', transactionsTwo);
console.log('balanceTwo', balanceTwo);

//-------------------------------------Best way-------

const transationsThree = [1000, 40000, 60000, -3000, -2000, 90000];

const balanceThree = transationsThree.reduce(
  (acc, trans, index, array) => (acc += trans),
  0
);

console.log('transactionsThree', transationsThree);
console.log('balanceThree', balanceThree);

//----------------------------------------------------

const transactionsFour = [2000, 10000, -50000, 6000000, 80000];
const min = transactionsFour.reduce((acc, trans, index, array) => {
  if (acc < trans) {
    return acc;
  } else {
    return trans;
  }
}, transactions[0]);

console.log('transactionsFour', transactionsFour);
console.log('min transaction', min);

//----------------------------------------------------

const transactionsFive = [1000, 20000, -1, 6000000, -2];
const minTwo = transactionsFive.reduce(
  (acc, trans, index, array) => (acc < trans ? acc : trans),
  transactions[0]
);

console.log('transactionsFive', transactionsFive);
console.log('minTwo transaction', minTwo);
