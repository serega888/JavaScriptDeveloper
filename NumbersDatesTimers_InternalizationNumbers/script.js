'use strict';
//---------------------------------------------- Интернационализация Чисел-------------------------------------

const a = 89254573831.21;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'USD',
};

console.log('USA', new Intl.NumberFormat('en-US', options).format(a));
console.log('China', new Intl.NumberFormat('zh-CN', options).format(a));
console.log('Russia', new Intl.NumberFormat('ru-RU', options).format(a));
console.log('Germany', new Intl.NumberFormat('de-DE', options).format(a));
console.log('France', new Intl.NumberFormat('fr-CA', options).format(a));
