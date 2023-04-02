'use strict';

//-------------------------------------------------work with numbers-------------------------------------
//----------------------------------------- Преобразование И Проверка Чисел

console.log('11 === 11.0', 11 === 11.0, typeof (11 === 11.0)); // true

//----------------------------------10 - 0-9; 1 / 10 = 0.1; 10 / 3 = 3.33333333---------------
//-----------------------------------------2 - 0, 1--------------------
console.log('0.1 + 0.2 = ', 0.1 + 0.2, typeof (0.1 + 0.2)); // 0.30000000000000004  number

console.log(
  '(0.1 + 0.2).toFixed(1)',
  (0.1 + 0.2).toFixed(1),
  typeof (0.1 + 0.2).toFixed(1)
); // 0.3   string

console.log(
  '+(0.1 + 0.2).toFixed(1)',
  +(0.1 + 0.2).toFixed(1),
  typeof +(0.1 + 0.2).toFixed(1)
); // 0.3   number

console.log(
  'Number.parseFloat((0.1 + 0.2).toFixed(1))',
  Number.parseFloat((0.1 + 0.2).toFixed(1)),
  typeof Number.parseFloat((0.1 + 0.2).toFixed(1))
); // 0.3   number

console.log('-------------------------');
console.log('0.1 + 0.2 === 0.3', 0.1 + 0.2 === 0.3, typeof (0.1 + 0.2 === 0.3)); // false

console.log(
  '(0.1 + 0.2).toFixed(1) === 0.3',
  (0.1 + 0.2).toFixed(1) === 0.3,
  typeof ((0.1 + 0.2).toFixed(1) === 0.3)
); // false

console.log(
  '+(0.1 + 0.2).toFixed(1) === 0.3',
  +(0.1 + 0.2).toFixed(1) === 0.3,
  typeof (+(0.1 + 0.2).toFixed(1) === 0.3)
); // true

console.log(
  'Number.parseFloat((0.1 + 0.2).toFixed(1)) === 0.3',
  Number.parseFloat((0.1 + 0.2).toFixed(1)) === 0.3,
  typeof (Number.parseFloat((0.1 + 0.2).toFixed(1)) === 0.3)
); // true

console.log(
  "Number.parseFloat('0.1$') + Number.parseFloat('0.2$')",
  Number.parseFloat('0.1$') + Number.parseFloat('0.2$'),
  typeof (Number.parseFloat('0.1$') + Number.parseFloat('0.2$'))
); // 0.30000000000000004

console.log(
  "+(Number.parseFloat('0.1$') + Number.parseFloat('0.2$')).toFixed(1)",
  +(Number.parseFloat('0.1$') + Number.parseFloat('0.2$')).toFixed(1),
  typeof +(Number.parseFloat('0.1$') + Number.parseFloat('0.2$')).toFixed(1)
); // 0.3

//-------------------------------------------Converting strings to numbers-------------------
console.log("Number('11')", Number('11'), typeof Number('11'));
console.log("+'11'", +'11', typeof +'11');
console.log('11', typeof '11');

//-------------------------------------------Parsing numbers from string-------------------------------
console.log(
  "Number.parseInt('22%', 10)",
  Number.parseInt('22%', 10),
  typeof Number.parseInt('22%', 10)
);

console.log(
  "Number.parseInt('1101%', 2)",
  Number.parseInt('1101%', 2),
  typeof Number.parseInt('1101%', 2)
); // 1101 -> (1 * 2 ** 0) + (0 * 2 ** 1) + (1 * 2 ** 2) + (1 * 2 ** 3) -> 1 + 0 + 4 + 8 -> 13

console.log(
  "Number.parseInt('s22', 10)",
  Number.parseInt('s22', 10),
  typeof Number.parseInt('s22', 10)
);

console.log(
  "Number.parseFloat('19.7kg')",
  Number.parseFloat('19.7kg'),
  typeof Number.parseFloat('19.7kg')
);
console.log(
  "Number.parseInt('29.7kg')",
  Number.parseInt('29.7kg'),
  typeof Number.parseInt('29.7kg')
);

console.log(
  "parseInt('29.7kg')",
  parseInt('29.7kg'),
  typeof parseInt('29.7kg')
);

//------------------------------------------------------ Other methods from Number namespace----------------------------
console.log('Number.isNaN(333)', Number.isNaN(333), typeof Number.isNaN(333));

console.log(
  "Number.isNaN('555')",
  Number.isNaN('555'),
  typeof Number.isNaN('555')
);
console.log(
  "Number.isNaN(Number.parseInt('s22', 10))",
  Number.isNaN(Number.parseInt('s22', 10)),
  typeof Number.isNaN(Number.parseInt('s22', 10))
);

console.log("+'23s'", +'23s', typeof +'23s');

console.log(
  "Number.isNaN(+'24s')",
  Number.isNaN(+'24s'),
  typeof Number.isNaN(+'24s')
);

console.log('13 / 0 = ', 13 / 0, typeof 13 / 0); // Infinity - бесконечное число

console.log(
  'Number.isNaN(13 / 0)',
  Number.isNaN(13 / 0),
  typeof Number.isNaN(13 / 0)
);

//-----------------------------------------Метод isFinite() проверяет является ли конечным числом или бесконечным числом--------------------------
console.log(
  'Number.isFinite(333)',
  Number.isFinite(333),
  typeof Number.isFinite(333)
);

console.log(
  "Number.isFinite('555')",
  Number.isFinite('555'),
  typeof Number.isFinite('555')
);

console.log(
  "Number.isFinite('112%')",
  Number.isFinite('112%'),
  typeof Number.isFinite('112%')
);

console.log(
  "Number.isFinite(+'113$')",
  Number.isFinite(+'113$'),
  typeof Number.isFinite(+'113$')
);

console.log(
  'Number.isFinite(15 / 0)',
  Number.isFinite(15 / 0),
  typeof Number.isFinite(15 / 0)
);
