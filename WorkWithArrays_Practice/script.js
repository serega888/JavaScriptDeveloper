'use strict';
// -----------------------------------------------------------------------practice with arrays---------------------------------------------------------

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

const bankDepositTotal = accounts
  .flatMap(acc => acc.transactions)
  .filter(trans => trans > 0)
  .reduce((acc, trans) => acc + trans, 0);
console.log('bankDepositTotal', bankDepositTotal);

//--------------------------------------

const bankWithdrawalsOver2100 = accounts
  .flatMap(acc => acc.transactions)
  .filter(trans => trans <= -2100).length;
console.log('bankWithdrawalsOver2100', bankWithdrawalsOver2100);

const bankWithdrawalsOver700 = accounts
  .flatMap(acc => acc.transactions)
  .reduce((counter, trans) => (trans <= -700 ? (counter += 1) : counter), 0);
console.log('bankWithdrawalsOver700', bankWithdrawalsOver700);

//----------------------------------------

const { depositsTotalInfo, withdrawalsTotalInfo } = accounts
  .flatMap(acc => acc.transactions)
  .reduce(
    (acc, trans) => {
      trans > 0
        ? (acc.depositsTotalInfo += trans)
        : (acc.withdrawalsTotalInfo += trans);
      return acc;
    },
    { depositsTotalInfo: 0, withdrawalsTotalInfo: 0 }
  );
console.log(depositsTotalInfo, withdrawalsTotalInfo);

const { depositsTotalInfoTwo, withdrawalsTotalInfoTwo } = accounts
  .flatMap(acc => acc.transactions)
  .reduce(
    (acc, trans) => {
      acc[trans > 0 ? 'depositsTotalInfoTwo' : 'withdrawalsTotalInfoTwo'] +=
        trans;
      return acc;
    },
    { depositsTotalInfoTwo: 0, withdrawalsTotalInfoTwo: 0 }
  );
console.log(depositsTotalInfoTwo, withdrawalsTotalInfoTwo);

//------------------------------------------------------------------

const textOne = 'I LIKe to write PROGRAMS';
const textTwo = "i'm a programmer";
const textThree = 'i work as programmer';
const textFour = 'to write programs is my HOBBY';

const textToUpperCaseFirstLetter = text => {
  const excep = ['to', 'a', 'as'];
  const firstLetterToUpperCase = word => word[0].toUpperCase() + word.slice(1);
  text = text
    .toLowerCase()
    .split(' ')
    .map(word => (excep.includes(word) ? word : firstLetterToUpperCase(word)))
    .join(' ');
  return firstLetterToUpperCase(text);
};

console.log(textToUpperCaseFirstLetter(textOne));
console.log(textToUpperCaseFirstLetter(textTwo));
console.log(textToUpperCaseFirstLetter(textThree));
console.log(textToUpperCaseFirstLetter(textFour));
