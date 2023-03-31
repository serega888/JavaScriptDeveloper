'use strict';

// -------------------------------------------------------------------------Card Bank App-----------------------------------------------------------

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
const inputCloseUser = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayTransactions = function (account, sort = false) {
  containerTransactions.innerHTML = '';
  const transactionsSorted = sort
    ? account.transactions.slice().sort((x, y) => x - y)
    : account.transactions;

  transactionsSorted.forEach(function (trans, index) {
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

// displayTransactions(account1.transactions);
//console.log(containerTransactions.innerHTML);

const createNickNames = function (accs) {
  accs.forEach(
    acc =>
      (acc.nickName = acc.userName
        .toLowerCase()
        .split(' ')
        .map(function (item) {
          return item[0];
        })
        .join(''))
  );
};
createNickNames(accounts);
// console.log(accounts);

//------------------------------------------Display balance-----------------

const displayBalance = function (account) {
  const balance = account.transactions.reduce((acc, trans) => acc + trans, 0);
  account.balance = balance;
  labelBalance.textContent = `${balance}$`;
};

// displayBalance(account1.transactions);

//------------------------------------------------Display total---------------

const displayTotal = function (account) {
  const depositTotal = account.transactions
    .filter(trans => trans > 0)
    .reduce((acc, trans) => acc + trans, 0);
  // console.log(depositTotal);
  labelSumIn.textContent = `${depositTotal}$`;

  const withdrawalTotal = account.transactions
    .filter(trans => trans < 0)
    .reduce((acc, trans) => acc + trans, 0);
  // console.log(withdrawalTotal);
  labelSumOut.textContent = `${withdrawalTotal}$`;

  const interestTotal = account.transactions
    .filter(trans => trans > 0)
    .map(depos => (depos * account.interest) / 100)
    .filter((interestT, index, arr) => {
      // console.log(arr);
      return interestT >= 100;
    })
    .reduce((acc, interestT) => acc + interestT, 0);
  // console.log(interestTotal);
  labelSumInterest.textContent = `${interestTotal}$`;
};

// displayTotal(account1.transactions);

//-----------------------------------------------Login-------------------

const updateUserInterface = function (account, sort = false) {
  displayTransactions(account, sort);

  displayBalance(account);

  displayTotal(account);
};

let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('Welcome!');

  currentAccount = accounts.find(
    account => account.nickName === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `${currentAccount.userName}`;

    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUserInterface(currentAccount);
  }
});

//-------------------------------------------------Transfer Money------------

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('Hi transfer money!');
  const transferAmountMoney = Number(inputTransferAmount.value);
  const recipientTransferMoney = inputTransferTo.value;
  const recipientAccount = accounts.find(
    account => account.nickName === recipientTransferMoney
  );
  // console.log(
  //   transferAmountMoney,
  //   currentAccount.nickName,
  //   recipientAccount.nickName
  // );

  // const isTrueNickName =
  //   currentAccount.nickName !== recipientAccount?.nickName ? true : false;
  // console.log(isTrueNickName);

  if (
    transferAmountMoney > 0 &&
    transferAmountMoney <= currentAccount.balance &&
    recipientAccount &&
    currentAccount.nickName !== recipientAccount?.nickName
  ) {
    currentAccount.transactions.push(-transferAmountMoney);
    recipientAccount.transactions.push(transferAmountMoney);
    inputTransferAmount.value = '';
    inputTransferTo.value = '';
    inputTransferAmount.blur();

    updateUserInterface(currentAccount);
    // console.log(currentAccount);
  }
});

//-------------------------------------------Close Bill------------------------------
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('Close Bill');
  const inputCloseUserValue = inputCloseUser.value;
  const inputClosePinValue = Number(inputClosePin.value);
  if (
    currentAccount.nickName === inputCloseUserValue &&
    inputClosePinValue === currentAccount.pin
  ) {
    // console.log('Closed Bill Of Money!');
    const closeUserIndex = accounts.findIndex(
      account => account.nickName === currentAccount.nickName
    );
    // console.log(closeUserIndex);
    accounts.splice(closeUserIndex, 1);

    inputCloseUser.value = '';
    inputClosePin.value = '';
    inputClosePin.blur();
    labelWelcome.textContent = 'Войти';
    containerApp.style.opacity = 0;
  }
});

//-------------------------------------------Loan Money------------------------------

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('Loan Money!');
  const loanAmount = Number(inputLoanAmount.value);
  // console.log(loanAmount);
  if (
    loanAmount > 0 &&
    currentAccount.transactions.some(trans => trans >= (loanAmount * 10) / 100)
  ) {
    // console.log('Get loan money!');
    currentAccount.transactions.push(loanAmount);
    inputLoanAmount.value = '';
    inputLoanAmount.blur();
    updateUserInterface(currentAccount);
  }
});

//-------------------------------------------Sort Transactions------------------------------

let sortedTransactions = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('sortedTransactions', sortedTransactions);

  updateUserInterface(currentAccount, !sortedTransactions);
  sortedTransactions = !sortedTransactions;
  // console.log('sortedTransactions', sortedTransactions);
});
