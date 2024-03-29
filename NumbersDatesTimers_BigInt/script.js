'use strict';
//--------------------------------------------------------BigInt----------------------------------------------------------
console.log('2 ** 53 - 1 = ', 2 ** 53 - 1);
console.log('Number.MAX_SAFE_INTEGER ', Number.MAX_SAFE_INTEGER);

console.log('2 ** 53 + 0 = ', 2 ** 53 + 0);
console.log('2 ** 53 + 1 = ', 2 ** 53 + 1);
console.log('2 ** 53 + 2 = ', 2 ** 53 + 2);

console.log(
  '43223455244520245894325842234543n ',
  43223455244520245894325842234543n
);

console.log(
  "BigInt('43223455244520245894325842234543') ",
  BigInt('43223455244520245894325842234543')
);

console.log(
  '43223455244520245894325842234543n + 43223455244520245894325842234543n = ',
  43223455244520245894325842234543n + 43223455244520245894325842234543n
);
console.log(
  '43223455244520245894325842234543n - 43223455244520245894325842234543n = ',
  43223455244520245894325842234543n - 43223455244520245894325842234543n
);
console.log(
  '43223455244520245894325842234543n * 43223455244520245894325842234543n = ',
  43223455244520245894325842234543n * 43223455244520245894325842234543n
);
console.log(
  '43223455244520245894325842234543n / 43223455244520245894325842234543n = ',
  43223455244520245894325842234543n / 43223455244520245894325842234543n
);

// console.log(
//   '43223455244520245894325842234543n ** 43223455244520245894325842234543n = ',
//   43223455244520245894325842234543n ** 43223455244520245894325842234543n
// );

console.log(
  '43223455244520245894325842234543n ** 10n = ',
  43223455244520245894325842234543n ** 10n
);

const bigNumber = 43223455244520245894325842234543n;
const regularNumber = 189;

// console.log(Math.pow(bigNumber, 2));

console.log(
  'bigNumber * BigInt(regularNumber) = ',
  bigNumber * BigInt(regularNumber)
);

console.log("bigNumber * BigInt('189') = ", bigNumber * BigInt('189'));

console.log(
  "bigNumber * BigInt(regularNumber) === bigNumber * BigInt('189') ",
  bigNumber * BigInt(regularNumber) === bigNumber * BigInt('189')
);

console.log(
  '43223455244520245894325842234543n > 123 ',
  43223455244520245894325842234543n > 123
);

console.log('123n === 123 ', 123n === 123);
console.log('223n === 223n ', 223n === 223n);
console.log("323n === BigInt('323') ", 323n === BigInt('323'));
console.log('typeof 123n ', typeof 123n);
console.log('typeof 123 ', typeof 123);
console.log('123n == 123 ', 123n == 123);
console.log("123n == '123' ", 123n == '123');

console.log(bigNumber + ' это ОЧЕНЬ большое число!');

console.log('5 / 3 = ', 5 / 3);
console.log('5n / 3n = ', 5n / 3n);
