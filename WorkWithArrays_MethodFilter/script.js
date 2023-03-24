'use strict';
// -----------------------------------------------------------------------Метод filter()--------------------------------------------------------------
//------------------------------------
const transactions = [
  3000, 2500, -5000, 50000, -7500, -1800, 500, 14000, -3500, -1200,
];

const withDrawals = transactions.filter(function (trans) {
  return trans < 0;
});

const deposites = transactions.filter(function (trans) {
  return trans > 0;
});

console.log('transactions', transactions);
console.log('withDrawals', withDrawals);
console.log('deposites', deposites);

//-----------------------------------

const transactionsTwo = [30000, 500000, 100000, -3000, 40000];
const withDrawalsTwo = [];
const depositesTwo = [];

for (const trans of transactionsTwo) {
  if (trans < 0) {
    withDrawalsTwo.push(trans);
  }
}

for (const trans of transactionsTwo) {
  if (trans > 0) {
    depositesTwo.push(trans);
  }
}

console.log('transactionsTwo', transactionsTwo);
console.log('withDrawalsTwo', withDrawalsTwo);
console.log('depositesTwo', depositesTwo);

//-------------------------------------Best way-------

const transationsThree = [1000, 40000, 60000, -3000, -2000, 90000];

const withDrawalsThree = transationsThree.filter(trans => trans < 0);
const depositesThree = transationsThree.filter(trans => trans > 0);

console.log('transactionThree', transationsThree);
console.log('withDrawalsThree', withDrawalsThree);
console.log('depositesThree', depositesThree);
