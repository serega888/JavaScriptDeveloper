'use strict';

// -------------------------------------------------------------------------Card Bank App-----------------------------------------------------------

const account1 = {
  userName: 'Sergey Bray',
  transactions: [
    5000, 2500, -3000, 50000, -8500, -1100, -1700, 11000, 200.25, 400,
  ],
  interest: 1.5,
  pin: 11111,
  transactionsDates: [
    '2022-02-12T15:14:06.486Z',
    '2022-03-09T11:42:26.371Z',
    '2022-05-21T07:43:59.331Z',
    '2022-06-25T15:21:20.814Z',
    '2022-07-26T15:21:20.814Z',
    '2022-10-02T14:43:31.074Z',
    '2022-10-29T11:24:19.761Z',
    '2022-11-15T10:45:23.907Z',
    '2022-12-22T12:17:46.255Z',
    '2023-03-22T12:17:46.255Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account2 = {
  userName: 'Sergey Green',
  transactions: [20000, 64000, -13500, -700, -2100, -20000, 55000, -300, 500.0],
  interest: 1.3,
  pin: 22222,
  transactionsDates: [
    '2022-01-02T15:43:31.074Z',
    '2022-02-29T13:24:19.761Z',
    '2022-03-15T14:45:23.907Z',
    '2022-04-22T16:17:46.255Z',
    '2022-05-12T10:14:06.486Z',
    '2022-06-09T09:42:26.371Z',
    '2022-07-21T07:43:59.331Z',
    '2022-08-25T16:21:20.814Z',
    '2023-03-25T16:21:20.814Z',
  ],
  currency: 'USD',
  locale: 'de-DE',
};

const account3 = {
  userName: 'Sergey Yellow',
  transactions: [9000, -2000, 2800, 3000, -2000, 1500, 14000, -4000, 600.75],
  interest: 0.8,
  pin: 33333,
  transactionsDates: [
    '2022-03-02T15:43:31.074Z',
    '2022-04-29T13:24:19.761Z',
    '2022-05-15T14:45:23.907Z',
    '2022-06-22T16:17:46.255Z',
    '2022-07-12T10:14:06.486Z',
    '2022-08-09T09:42:26.371Z',
    '2022-09-21T07:43:59.331Z',
    '2022-10-25T16:21:20.814Z',
    '2023-03-26T16:21:20.814Z',
  ],
  currency: 'RUB',
  locale: 'ru-RU',
};

const account4 = {
  userName: 'Sergey Red',
  transactions: [5300, 13000, 5000, 400, 1900, 700.5],
  interest: 1,
  pin: 44444,
  transactionsDates: [
    '2022-04-02T15:43:31.074Z',
    '2022-02-29T13:24:19.761Z',
    '2022-03-15T14:45:23.907Z',
    '2022-04-22T16:17:46.255Z',
    '2022-07-12T10:14:06.486Z',
    '2023-03-27T10:14:06.486Z',
  ],
  currency: 'EUR',
  locale: 'fr-CA',
};

const account5 = {
  userName: 'Sergey White',
  transactions: [6300, 8000, 3000, 500, 1200, 800.33],
  interest: 1.1,
  pin: 55555,
  transactionsDates: [
    '2022-05-02T15:43:31.074Z',
    '2022-06-29T13:24:19.761Z',
    '2022-07-15T14:45:23.907Z',
    '2022-08-22T16:17:46.255Z',
    '2022-09-12T10:14:06.486Z',
    '2023-03-28T10:14:06.486Z',
  ],
  currency: 'USD',
  locale: 'zh-CN',
};

const dateNow = new Date();
const accounts = [account1, account2, account3, account4, account5];
const options = {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
};

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

const formatTransactionDate = function (date, locale) {
  const getDaysBetweenDates = (startDate, endDate) =>
    Math.floor(Math.abs(startDate - endDate) / (1000 * 60 * 60 * 24));

  const RU = 'ru-RU';

  const amountDays = getDaysBetweenDates(date, dateNow);
  // console.log('AmountDays', amountDays);
  let amount = 0;

  if (amountDays > 30 && amountDays < 365 && locale === RU) {
    amount = 31;
  } else if (amountDays > 365 && locale === RU) {
    amount = 366;
  } else {
    return new Intl.DateTimeFormat(locale, options).format(date);
  }
  switch (amount) {
    case 31:
      return 'больше месяца назад';
    case 366:
      return 'больше года назад';
  }
};

const displayTransactions = function (account, sort = false) {
  containerTransactions.innerHTML = '';
  const transactionsSorted = sort
    ? account.transactions
        .slice()
        .sort((x, y) => Number(x.toFixed(2)) - Number(y.toFixed(2)))
    : account.transactions;

  transactionsSorted.forEach(function (trans, index) {
    const transType = trans > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(account.transactionsDates[index]);
    const transDate = formatTransactionDate(date, account.locale);

    const transactionRow = `
    <div class="transactions__row">
      <div class="transactions__type transactions__type--${transType}">
      ${index + 1} ${transType}
      </div>
      <div class="transactions__date">${transDate}</div>
      <div class="transactions__value">${trans.toFixed(2)}$</div>
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
  const balance = account.transactions
    .reduce((acc, trans) => acc + Number(trans.toFixed(2)), 0)
    .toFixed(2);
  account.balance = +balance;
  labelBalance.textContent = `${balance}$`;
};

// displayBalance(account1.transactions);

//------------------------------------------------Display total---------------

const displayTotal = function (account) {
  const depositTotal = account.transactions
    .filter(trans => trans > 0)
    .reduce((acc, trans) => acc + Number(trans.toFixed(2)), 0)
    .toFixed(2);

  // console.log(depositTotal);
  labelSumIn.textContent = `${depositTotal}$`;

  const withdrawalTotal = account.transactions
    .filter(trans => trans < 0)
    .reduce((acc, trans) => acc + Number(trans.toFixed(2)), 0)
    .toFixed(2);
  // console.log(withdrawalTotal);
  labelSumOut.textContent = `${withdrawalTotal}$`;

  const interestTotal = account.transactions
    .filter(trans => trans > 0)
    .map(depos =>
      Number(
        (
          (Number(depos.toFixed(2)) * Number(account.interest.toFixed(2))) /
          100
        ).toFixed(2)
      )
    )
    .filter((interestT, index, arr) => {
      // console.log(arr);
      return interestT >= 100;
    })
    .reduce((acc, interestT) => acc + Number(interestT.toFixed(2)), 0)
    .toFixed(2);
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

  labelDate.textContent = new Intl.DateTimeFormat(
    currentAccount.locale,
    options
  ).format(dateNow);

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
  const transferAmountMoney = Number(
    Number(inputTransferAmount.value).toFixed(2)
  );
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
    currentAccount.transactionsDates.push(dateNow.toISOString());
    recipientAccount.transactionsDates.push(dateNow.toISOString());

    updateUserInterface(currentAccount);
    // console.log(currentAccount, recipientAccount);
  }
  inputTransferAmount.value = '';
  inputTransferTo.value = '';
  inputTransferAmount.blur();
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
    labelWelcome.textContent = 'Войти';
    containerApp.style.opacity = 0;
  }

  inputCloseUser.value = '';
  inputClosePin.value = '';
  inputClosePin.blur();
});

//-------------------------------------------Loan Money------------------------------

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('Loan Money!');
  const loanAmount = Math.floor(inputLoanAmount.value);
  // console.log(loanAmount, typeof loanAmount);
  if (
    loanAmount > 0 &&
    currentAccount.transactions.some(trans => trans >= (loanAmount * 10) / 100)
  ) {
    // console.log('Get loan money!');
    currentAccount.transactions.push(loanAmount);
    currentAccount.transactionsDates.push(dateNow.toISOString());
    updateUserInterface(currentAccount);
  }

  inputLoanAmount.value = '';
  inputLoanAmount.blur();
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

//-----------------------------------------Painted zebra use operator remains (%) ---------------------------------
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  [...document.querySelectorAll('.transactions__row')].forEach((row, index) =>
    index % 2 !== 0
      ? (row.style.background = '#84d38e')
      : (row.style.background = '#e4e0e0')
  );
});
