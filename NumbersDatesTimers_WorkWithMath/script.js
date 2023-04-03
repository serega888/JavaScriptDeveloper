'use strict';
//------------------------------------------------ Работа с Math------------------------------------------------------------------

console.log('Math.sqrt(64) ', Math.sqrt(64));
console.log('81 ** (1 / 2) ', 81 ** (1 / 2));
console.log('27 ** (1 / 3) ', 27 ** (1 / 3));

console.log(
  'Math.max(23, 555, 66, 44, 31, 12, 19) ',
  Math.max(23, 555, 66, 44, 31, 12, 19)
);

console.log(
  "Math.max(32, '553', '66', 44, 31, 12, 99) ",
  Math.max(32, '553', '66', 44, 31, 12, 99)
);

console.log(
  "Math.max(33, '355%', '66%', 144, 31, 32, 39) ",
  Math.max(33, '355%', '66%', 144, 31, 32, 39)
);

console.log(
  'Math.min(43, 155, 66, 44, 312, 22, 59) ',
  Math.min(43, 155, 66, 44, 312, 22, 59)
);

console.log('Math.PI ', Math.PI);

console.log(
  "Math.PI * Number.parseInt('33px') ** 2 ",
  Math.PI * Number.parseInt('33px') ** 2
);

console.log(
  'Math.trunc(Math.random() * 6) + 1 ',
  Math.trunc(Math.random() * 6) + 1,
  typeof (Math.trunc(Math.random() * 6) + 1)
);

console.log('Math.trunc(2.98) ', Math.trunc(2.98));

console.log('Math.trunc(2.58) ', Math.trunc(2.58));

console.log('Math.trunc(2.48) ', Math.trunc(2.48));

console.log('Math.round(3.38) ', Math.round(3.38));
console.log('Math.round(3.48) ', Math.round(3.48));
console.log('Math.round(3.58)', Math.round(3.58));
console.log('Math.round(3.98) ', Math.round(3.98));

console.log('Math.ceil(4.39) ', Math.ceil(4.39));
console.log('Math.ceil(4.49) ', Math.ceil(4.49));
console.log('Math.ceil(4.59) ', Math.ceil(4.59));
console.log('Math.ceil(4.99) ', Math.ceil(4.99));
console.log("Math.ceil('4.79') ", Math.ceil('4.79'));

console.log('Math.floor(5.37) ', Math.floor(5.37));
console.log('Math.floor(5.47) ', Math.floor(5.47));
console.log('Math.floor(5.57) ', Math.floor(5.57));
console.log("Math.floor('5.97') ", Math.floor('5.97'));

console.log('Math.trunc(-6.11) ', Math.trunc(-6.11));
console.log('Math.floor(-6.11) ', Math.floor(-6.11));

console.log('Math.PI ', Math.PI);
console.log('Math.PI.toFixed() ', Math.PI.toFixed(), typeof Math.PI.toFixed());

console.log(
  'Math.PI.toFixed(1) ',
  Math.PI.toFixed(1),
  typeof Math.PI.toFixed(1)
);

console.log(
  'Math.PI.toFixed(2) ',
  Math.PI.toFixed(2),
  typeof Math.PI.toFixed(2)
);

console.log(
  'Math.PI.toFixed(2) ',
  Math.PI.toFixed(3),
  typeof Math.PI.toFixed(3)
);

console.log(
  '+(3.34567).toFixed(2)',
  +(3.34567).toFixed(2),
  typeof +(3.34567).toFixed(2)
);

console.log(
  'Number((3.34567).toFixed(2)) ',
  Number((3.34567).toFixed(2)),
  typeof Number((3.34567).toFixed(2))
);
