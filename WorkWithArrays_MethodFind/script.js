'use strict';
// -----------------------------------------------------------------------Метод find()--------------------------------------------------------------
//------------------------------------
const transactions = [
  3000, 2500, -5000, 50000, -7500, -1800, 500, 14000, -3500, -1200,
];

const firstDeposit = transactions.find(trans => trans > 0);
const firstWithdrawal = transactions.find(trans => trans < 0);

console.log('firstDeposit', firstDeposit);
console.log('firstWithdrawal', firstWithdrawal);

//-----------------------------------

const account1 = {
  userName: 'Sergey Gray',
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

const sergeyGreen = accounts.find(
  account => account.userName === 'Sergey Green'
);

console.log(sergeyGreen);
