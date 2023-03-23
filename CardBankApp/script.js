'use strict';

// -------------------------------------------------------------------------Card Bank App-----------------------------------------------------------

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

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.total__value--in');
const labelSumOut = document.querySelector('.total__value--out');
const labelSumInterest = document.querySelector('.total__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerTransactions = document.querySelector('.transactions');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayTransactions = function (transactions) {
  containerTransactions.innerHTML = '';

  transactions.forEach(function (trans, index) {
    const transType = trans > 0 ? 'deposit' : 'withdrawal';
    const transactionRow = `
    <div class="transactions__row">
      <div class="transactions__type transactions__type--${transType}">
      ${index + 1} ${transType}
      </div>
      <div class="transactions__value">${trans}$</div>
    </div>`;
    containerTransactions.insertAdjacentHTML('afterbegin', transactionRow);
  });
};

displayTransactions(account1.transactions);
//console.log(containerTransactions.innerHTML);
