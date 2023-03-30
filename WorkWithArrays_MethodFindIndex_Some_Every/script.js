'use strict';
// -----------------------------------------------------------------------Метод findIndex()--------------------------------------------------------------
//------------------------------------
const transactions = [
  3000, 2500, -5000, 50000, -7500, -1800, 500, 14000, -3500, -1200,
];

const firstDepositIndex = transactions.findIndex(trans => trans === 3000);
console.log(transactions);
console.log('firstDepositIndex', firstDepositIndex);

transactions.splice(firstDepositIndex, 1);
console.log(transactions);

//-----------------------------------Method some()------------------------------------

console.log('includes(2500)', transactions.includes(2500));

console.log(
  'somesome(trans => trans > 2500)',
  transactions.some(trans => trans > 2500)
);

console.log(
  'some(trans => trans === 2500)',
  transactions.some(trans => trans === 2500)
);

//-----------------------------------Method every()------------------------------------
console.log(
  'every(trans => Math.abs(trans) > 0)',
  transactions.every(trans => Math.abs(trans) > 0)
);
console.log(
  'every(trans => trans > 0)',
  transactions.every(trans => trans > 0)
);
