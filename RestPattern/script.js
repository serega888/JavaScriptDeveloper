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
//----------------------------------------------------------------Rest Pattern-----------------------------------------------------------------------
//----------Res Pattern with destructurizations-------------------------------------------------------------------------------------
//----------------------Rest Pattern with arrays------------
const [aRPOne, aRPTwo, ...itmesRPs] = [1, 2, 3, 4];
console.log(aRPOne, aRPTwo, itmesRPs);

const [fishRP, , riceWithMeatRP, ...otherFoodRPs] = [
  ...russianRestaurant.appetizers,
  ...russianRestaurant.mainMenu,
];
console.log(fishRP, riceWithMeatRP, otherFoodRPs);

//-----------------------------Rest Pattern with Objects-----------
const { sun, sat, ...weekdaysRPs } = russianRestaurant.workingHours;
console.log(sun, sat, weekdaysRPs);
//---------------------------------------------------------------------------------------------------------------------------------
//---------------------Rest Pattern with Functions-------------------------------
const sumRP = function (...numRPs) {
  let sumRP = 0;
  for (let i = 0; i < numRPs.length; i++) {
    sumRP += numRPs[i];
  }
  console.log(sumRP);
};

sumRP(1, 3); // 4
sumRP(1, 4, 8, 9); // 22

const numbersRPs = [50, 20, 90];
sumRP(...numbersRPs); // 160

russianRestaurant.orderRiceWithMeat(
  'Красный рис',
  'Баранина',
  'Чеснок',
  'Морковь'
); // Вы заказали плов с Красный рис, Баранина,Чеснок,Морковь.

russianRestaurant.orderRiceWithMeat('Белый рис'); // Вы заказали плов с Белый рис.
//----------------------------------------------------------------------------------
