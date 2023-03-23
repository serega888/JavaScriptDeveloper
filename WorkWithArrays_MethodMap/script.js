'use strict';
// -----------------------------------------------------------------------Метод map()--------------------------------------------------------------
//------------------------------------
const transactions = [
  3000, 2500, -5000, 50000, -7500, -1800, 500, 14000, -3500, -1200,
];

const usdToEuro = 0.8;

const transactionToEuros = transactions.map(function (trans) {
  return trans * usdToEuro;
});

console.log('transactions', transactions);
console.log('transactionsToEuro', transactionToEuros);

//-----------------------------------

const transactionsTwo = [30000, 500000, 100000, -3000, 40000];
const usdToEuroTwo = 0.77;
const transactionToEurosTwo = [];

for (const trans of transactionsTwo) {
  transactionToEurosTwo.push(trans * usdToEuroTwo);
}

console.log('transactionsTwo', transactionsTwo);
console.log('transactionToEurosTwo', transactionToEurosTwo);

//-------------------------------------Best way-------

const transationsThree = [1000, 40000, 60000, -3000, -2000, 90000];
const usdToEuroThree = 0.9;

const transactionToEurosThree = transationsThree.map(
  trans => trans * usdToEuroThree
);

console.log('transactionThree', transationsThree);
console.log('transactionToEurosThree', transactionToEurosThree);

//-------------------------------------
const transactionsFour = [55000, 23000, 3400, -8000, 4000];
const transationInformations = transactionsFour.map((trans, index) => {
  let info = '';
  if (trans > 0) {
    info = `Transaction № ${index + 1}: ${trans} was deposited`;
  } else {
    info = `Transaction № ${index + 1}: ${Math.abs(trans)} was withdrew`;
  }

  return info;
});

console.log('transactionInformations', transationInformations);

//---------------------------------Best way------

const transactionsFive = [6000, 77700, 99900, 30000, -44000, 22000];
const transactionInformationsTwo = transactionsFive.map(
  (trans, index, array) => {
    return `Transaction № ${index + 1}: ${Math.abs(trans)} was ${
      trans > 0 ? 'deposited' : 'withdrew'
    }   in array: ${array}`;
  }
);

console.log('transactionInformationTwo', transactionInformationsTwo);

//----------------------------------Best way------

const transactionSix = [80000, 99900, 20000, 20000, -10000];
const transactionInformationThree = transactionSix.map(
  (trans, index, array) =>
    `Transaction № ${index + 1}: ${Math.abs(trans)} was ${
      trans > 0 ? 'deposited' : 'withdrew'
    }   in array: ${array}`
);

console.log('transactionInformatiomThree', transactionInformationThree);
