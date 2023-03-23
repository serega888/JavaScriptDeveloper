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
    sat: {
      open: 12,
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

  orderRiceWithMeat: function (riceRP, ...otherIngredintsRP) {
    if (otherIngredintsRP.length === 0) {
      console.log(`Вы заказали плов с ${riceRP}.`);
    } else {
      console.log(`Вы заказали плов с ${riceRP}, ${otherIngredintsRP}.`);
    }
  },
};
//------------------------------------------------------------ Short-circuit evaluation (||) (&&)----------------------------------------------------
// -------------------OR (||) operator. Short-circuit evaluation
console.log(25 || 'Sergey!');
console.log('' || 'Sergey');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || '' || 0 || 'Hi' || 33 || null);

russianRestaurant.guestsNumber = 0;

const guests = russianRestaurant.guestsNumber
  ? russianRestaurant.guestsNumber
  : 35;
console.log(guests);

const guestsOnes = russianRestaurant.guestsNumber || 55;
console.log(guestsOnes);

console.log('----------------------------');
//russianRestaurant.guestsNumberTwo = 1;

const guestsTwo = russianRestaurant.guestsNumberTwo
  ? russianRestaurant.guestsNumberTwo
  : 35;
console.log(guestsTwo);

const guestsThird = russianRestaurant.guestsNumberTwo || 55;
console.log(guestsThird);

// ----------------AND (&&) operator. Short-circuit evaluation
console.log(0 && 'Serg!');
console.log(1 && 'Serg');
console.log('cool' && 38 && 0 && 50 && null);

if (russianRestaurant.orderTea) {
  console.log(russianRestaurant.orderTea('Somewhere'));
}

console.log(
  russianRestaurant.orderTea && russianRestaurant.orderTea('Somewhere!')
);
