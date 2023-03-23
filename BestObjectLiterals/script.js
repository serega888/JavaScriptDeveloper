'use strict';
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const workingHoursBeforeES6 = {
  wed: {
    open: 10,
    close: 22,
  },
  fri: {
    open: 11,
    close: 22,
  },
  sat: {
    open: 12,
    close: 22,
  },
  sun: {
    open: 12,
    close: 22,
  },
};

const workingHoursWithES6 = {
  [weekDays[2]]: {
    open: 10,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 22,
  },
  [weekDays[5]]: {
    open: 12,
    close: 22,
  },
  [weekDays[6]]: {
    open: 12,
    close: 22,
  },
};

const russianRestaurant = {
  name: 'Вкусная еда',
  location: 'Аппетитная 88, Краснодар, Россия',
  categories: ['Сладости', 'Первое блюдо', 'Второе блюдо', 'Напитки'],
  appetizers: ['Рыба', 'Гороховый суп', 'Плов', 'Кампот'],
  mainMenu: ['Борщ', 'Картофель в мундире', 'Чай'],
  workingHoursBeforeES6: workingHoursBeforeES6,
  workingHoursWithES6,

  workingHours: {
    wed: {
      open: 10,
      close: 22,
    },
    fri: {
      open: 11,
      close: 22,
    },
    sat: {
      open: 12,
      close: 22,
    },
    sun: {
      open: 12,
      close: 22,
    },
  },

  orderFood(appetizersIndex, mainMenuIndex) {
    return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  },

  foodDelivery(obj) {
    console.log(obj);
  },

  foodDeliveryTwo({ mainMenuIndex, appetizersIndex, deliveryTime, address }) {
    console.log(
      `Ваш заказ скоро прибудет. ${this.mainMenu[mainMenuIndex]} и ${this.appetizers[appetizersIndex]} прибудет по адресу ${address} в ${deliveryTime}.`
    );
  },

  foodDeliveryThree({
    mainMenuIndex = 0,
    appetizersIndex = 0,
    deliveryTime = '9:30',
    address,
  }) {
    console.log(
      `Ваш заказ скоро прибудет. ${this.mainMenu[mainMenuIndex]} и ${this.appetizers[appetizersIndex]} прибудет по адресу ${address} в ${deliveryTime}.`
    );
  },

  orderTea(ingOne, ingTwo, ingThree) {
    console.log(`Вы заказали чай с ${ingOne}, ${ingTwo}, ${ingThree}.`);
  },

  orderRiceWithMeat(riceRP, ...otherIngredintsRP) {
    if (otherIngredintsRP.length === 0) {
      console.log(`Вы заказали плов с ${riceRP}.`);
    } else {
      console.log(`Вы заказали плов с ${riceRP}, ${otherIngredintsRP}.`);
    }
  },
};
//-------------------------------------------Best Object literals syntaxes-----------------------------------
console.log(russianRestaurant);
console.log(
  'russianRestaurant.workingHoursBeforeES6',
  russianRestaurant.workingHoursBeforeES6
);
console.log(
  'russianRestaurant.workingHoursWithES6',
  russianRestaurant.workingHoursWithES6
);
