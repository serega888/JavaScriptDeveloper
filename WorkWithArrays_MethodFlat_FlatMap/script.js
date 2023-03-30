'use strict';
// -----------------------------------------------------------------------Метод flat() deep any level---------------------------------------------------------
//------------------------------------
const transactions = [
  [3000, 2500, -5000],
  [50000, -7500, -1800],
  [500, 14000, -3500, -1200],
];

const arrsOne = transactions.flat(); // first level deep
console.log('transactions', transactions);
console.log('arrsOne', arrsOne);

//-----------------------------------
const transactionsTwo = [
  3000,
  [2500, [-5000, 1000]],
  50000,
  [-7500, [-1800, 2000]],
  500,
  [14000, -3500, [-1200, 3000]],
];

const arrsTwo = transactionsTwo.flat(2); // two level deep
console.log('transactionsTwo', transactionsTwo);
console.log('arrsTwo', arrsTwo);

//----------------------------

const account1 = {
  userName: 'Sergey Bray',
  transactions: [5000, 2500, -3000, 50000, -8500, -1100, -1700, 11000],
  interest: 1.5,
  pin: 11111,
};

const account2 = {
  userName: 'Sergey Green',
  transactions: [20000, 64000, -13500, -700, -2100, -20000, 55000, -300],
  interest: 1.3,
  pin: 22222,
};

const account3 = {
  userName: 'Sergey Yellow',
  transactions: [9000, -2000, 2800, 3000, -2000, 1500, 14000, -4000],
  interest: 0.8,
  pin: 33333,
};

const account4 = {
  userName: 'Sergey Red',
  transactions: [5300, 13000, 5000, 400, 1900],
  interest: 1,
  pin: 44444,
};

const account5 = {
  userName: 'Sergey White',
  transactions: [6300, 8000, 3000, 500, 1200],
  interest: 1.1,
  pin: 55555,
};

const accounts = [account1, account2, account3, account4, account5];

const allTransacArrays = accounts.map(acc => acc.transactions);
console.log('allTransacArrays', allTransacArrays);

const allTransactions = allTransacArrays.flat();
console.log('allTransactions', allTransactions);

const bankBalance = allTransactions.reduce((acc, trans) => acc + trans, 0);
console.log('bankBalance', bankBalance);

//---------------or------------------
const bankBalanceOne = accounts
  .map(acc => acc.transactions)
  .flat()
  .reduce((acc, trans) => acc + trans, 0); // method flat() and map() works more one Level deep
console.log('bankBalanceOne', bankBalanceOne);

//----------------or---------------------
const bankBalanceTwo = accounts
  .flatMap(acc => acc.transactions)
  .reduce((acc, trans) => acc + trans, 0); // method flatMap() works only with one Level deep
console.log('bankBalanceTwo', bankBalanceTwo);

//-----------------------------------Method flatMap() has deep only first level-----------------------

const account6 = {
  userName: 'Sergey Bray',
  transactions: [5000, 2500, -3000, 50000, -8500, -1100, -1700, 11000],
  interest: 1.5,
  pin: 11111,
};

const account7 = {
  userName: 'Sergey Green',
  transactions: [20000, 64000, -13500, -700, -2100, -20000, 55000, -300],
  interest: 1.3,
  pin: 22222,
};

const account8 = {
  userName: 'Sergey Yellow',
  transactions: [9000, -2000, 2800, 3000, -2000, 1500, 14000, -4000],
  interest: 0.8,
  pin: 33333,
};

const account9 = {
  userName: 'Sergey Red',
  transactions: [5300, 13000, 5000, 400, 1900],
  interest: 1,
  pin: 44444,
};

const account10 = {
  userName: 'Sergey White',
  transactions: [6300, 8000, 3000, 500, 1200],
  interest: 1.1,
  pin: 55555,
};

const accountsTwo = [account6, account7, account8, account9, account10];
const allTransactionArrays = accountsTwo.flatMap(
  account => account.transactions
);
console.log('allTransactionArrays', allTransactionArrays);
