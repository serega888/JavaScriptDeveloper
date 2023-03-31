'use strict';
// -----------------------------------------------------------------------Метод sort()---------------------------------------------------------
const account = {
  userName: 'Sergey Bray',
  transactions: [5000, 2500, -3000, 50000, -8500, -1100, -1700, 11000],
  interest: 1.5,
  contribution: ['Second deposit', 'First deposit', 'Third deposit'],
  pin: 11111,
};
console.log('contribution', account.contribution);
const sortContributionArrays = account.contribution.sort();
console.log('sortContributionArrays', sortContributionArrays);

console.log('transactions', account.transactions);

const sortTransactionsASCNotWorks = account.transactions.sort(); // method doesn't works
console.log('sortTransactionsASCNotWorks', sortTransactionsASCNotWorks);

const sortTransactionsASC = account.transactions.sort((x, y) => x - y);
console.log('sortTransactionsASC', sortTransactionsASC);

const sortTransactionsDESC = account.transactions.sort((x, y) => y - x);
console.log('sortTransactionsDESC', sortTransactionsDESC);

//------------------------------------or---------------

const sortTransactionsASCTwo = account.transactions.sort((x, y) => {
  if (x > y) {
    return 1;
  } else {
    return -1;
  }
});
console.log('sortTransactionsASCTwo', sortTransactionsASCTwo);

const sortTransactionsDESCTwo = account.transactions.sort((x, y) => {
  if (y > x) {
    return 1;
  } else {
    return -1;
  }
});
console.log('sortTransactionsDESCTwo', sortTransactionsDESCTwo);
