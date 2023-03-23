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
};

russianRestaurant.foodDelivery({
  deliveryTime: '11:30',
  address: 'Аппетитная 78, Краснодар, Россия',
  mainMenuIndex: 1,
  appetizersIndex: 0,
});

russianRestaurant.foodDeliveryTwo({
  deliveryTime: '10:30',
  address: 'Аппетитная 68, Краснодар, Россия',
  mainMenuIndex: 1,
  appetizersIndex: 0,
}); // Ваш заказ скоро прибудет. Картофель в мундире и Рыба прибудет по адресу Аппетитная 68, Краснодар, Россия в 10:30.

russianRestaurant.foodDeliveryThree({
  address: 'Аппетитная 58, Краснодар, Россия',
}); // Ваш заказ скоро прибудет. Борщ и Рыба прибудет по адресу Аппетитная 58, Краснодар, Россия в 9:30.

//------------------------------------------------Destructurization Objects---------------------------------------------------------------------
const { workingHours: hours, name: resName, categories } = russianRestaurant;
console.log(hours, resName, categories);

//Значения по умолчанию, и даже когда нет свойства у объекта, он создаётся
const { menu = [], appetizers: startMenu = [] } = russianRestaurant;
console.log(menu, startMenu);

//Изменение переменных
let xDestObj = 3;
let yDestObj = 5;

const objDest = { xDestObj: 11, yDestObj: 22, zDestObj: 33 };

//const { xDestObj, yDestObj } = objDest; //Uncaught SyntaxError: Identifier 'xDestObj' has already been declared
//let { xDestObj, yDestObj } = objDest; //Uncaught SyntaxError: Identifier 'xDestObj' has already been declared
({ xDestObj, yDestObj } = objDest); // 11 22
console.log(xDestObj, yDestObj);

// Деструктуризация вложенных объектов
const { sun } = hours; // получаем объект  с данными {open: 12, close: 22}
console.log(sun);

const {
  sun: { open: openHours, close: closeHours },
} = hours; // 12 22
console.log(openHours, closeHours);
