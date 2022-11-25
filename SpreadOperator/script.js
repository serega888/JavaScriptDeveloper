'use strict';
const russianRestaurant = {
  name: 'Вкусная еда',
  location: 'Аппетитная 88, Краснодар, Россия',
  categories: ['Сладости', 'Первое блюдо', 'Второе блюдо', 'Напитки'],
  appetizers: ['Рыба', 'Гороховый суп', 'Плов', 'Кампот'],
  mainMenu: ['Борщ', 'Картофель в мундире', 'Чай'],

  workingHours: {
    wed: {
      open: 10,
      close: 22,
    },
    fri: {
      open: 11,
      close: 22,
    },
    sun: {
      open: 12,
      close: 22,
    },
  },

  orderFood: function (appetizersIndex, mainMenuIndex) {
    return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  },

  foodDelivery: function (obj) {
    console.log(obj);
  },

  foodDeliveryTwo: function ({
    mainMenuIndex,
    appetizersIndex,
    deliveryTime,
    address,
  }) {
    console.log(
      `Ваш заказ скоро прибудет. ${this.mainMenu[mainMenuIndex]} и ${this.appetizers[appetizersIndex]} прибудет по адресу ${address} в ${deliveryTime}.`
    );
  },

  foodDeliveryThree: function ({
    mainMenuIndex = 0,
    appetizersIndex = 0,
    deliveryTime = '9:30',
    address,
  }) {
    console.log(
      `Ваш заказ скоро прибудет. ${this.mainMenu[mainMenuIndex]} и ${this.appetizers[appetizersIndex]} прибудет по адресу ${address} в ${deliveryTime}.`
    );
  },

  orderTea: function (ingOne, ingTwo, ingThree) {
    console.log(`Вы заказали чай с ${ingOne}, ${ingTwo}, ${ingThree}.`);
  },
};

// -----------old bad approach плохой старый подход
const arrOperatorSpread = [10, 20, 30];
const newArrWithOutOperatorSpread = [
  80,
  90,
  arrOperatorSpread[0],
  arrOperatorSpread[1],
  arrOperatorSpread[2],
];
console.log(newArrWithOutOperatorSpread); // [80, 90, 10, 20, 30]

//----------------------------------------------------
//-------------------------------------------------------------Spread (...) operator--------------------------------------------------
const newArrWithSpreadOperator = [500, 900, ...arrOperatorSpread];
console.log(newArrWithSpreadOperator); // [500, 900, 10, 20, 30]
console.log(...newArrWithSpreadOperator); // 500 900 10 20 30

const mainMenuWithSpread = [...russianRestaurant.mainMenu, 'Kофе'];
console.log(mainMenuWithSpread); // ['Борщ', 'Картофель в мундире', 'Чай', 'Kофе']
console.log(...mainMenuWithSpread); // Борщ Картофель в мундире Чай Kофе

//---------------------------------Array copying поверхностная копия массива-----------
const categoriesCopyWithSpread = [...russianRestaurant.categories];
console.log(categoriesCopyWithSpread); // ['Сладости', 'Первое блюдо', 'Второе блюдо', 'Напитки']

//-------------------Слияние массивов merge arrays----------------------
const menuWithSpread = [
  ...russianRestaurant.appetizers,
  ...russianRestaurant.mainMenu,
];
console.log(menuWithSpread); // ['Рыба', 'Гороховый суп', 'Плов', 'Кампот', 'Борщ', 'Картофель в мундире', 'Чай']

// ---------------Перебираемые(Iterable) - arrays, strings, maps, sets. OBJECTS AREN'T ITERABLE.(Объекты не являются перебираемыеми)---
const greetingWithSpread = 'Excellent';
const greetingLettersWithSpread = [...greetingWithSpread, '!'];
console.log(greetingLettersWithSpread); // ['E', 'x', 'c', 'e', 'l', 'l', 'e', 'n', 't', '!']
console.log(...greetingWithSpread); // E x c e l l e n t
//console.log(`${...greetingWithSpread}`); // Error Uncaught SyntaxError: Unexpected token '...'
//---------------------------------------
/*
const ingridientsWithSpread = [
  prompt(`Ингридиент один для вашего чая`),
  prompt(`Ингридиент два для вашего чая`),
  prompt(`Ингридиент три для вашего чая`),
];
*/
const ingridientsWithSpread = ['Сахар', 'Молоко', 'Карамель'];
console.log(ingridientsWithSpread); // Вы заказали чай с сахар, молоко, карамель.
//------------old aprroach without spread---------
russianRestaurant.orderTea(
  ingridientsWithSpread[0],
  ingridientsWithSpread[1],
  ingridientsWithSpread[2]
); // Вы заказали чай с сахар, молоко, карамель.
//---------or new approach with spread------------
russianRestaurant.orderTea(...ingridientsWithSpread); //Вы заказали чай с сахар, молоко, карамель.
//-------------------------------------
//-------------Objects with Spread----------
const newRussianRestorantWithSpread = {
  foundationDate: 2032,
  ...russianRestaurant,
  owner: 'Fadin',
};
console.log(newRussianRestorantWithSpread); // {foundationDate: 2032, name: 'Вкусная еда', location: 'Аппетитная 88, Краснодар, Россия', categories: Array(4), appetizers: Array(4), …}

const russianRestaurantCopyWithSpread = { ...russianRestaurant };
russianRestaurantCopyWithSpread.name = 'Fadin Вкусная еда';
console.log(russianRestaurant.name); // Вкусная еда
console.log(russianRestaurantCopyWithSpread.name); // Fadin Вкусная еда
