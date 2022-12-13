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
//--------------------------------------------------------------- Optional chaining (?.)----------------------------------------------------------------

if (russianRestaurant.workingHours && russianRestaurant.workingHours.thu) {
  console.log(russianRestaurant.workingHours.thu.open);
}

// ------------------------------Using optional chaining

// -----------------Properties
console.log(russianRestaurant.workingHours.thu?.open);

console.log(russianRestaurant.workingHours?.thu?.open);

const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of daysOfWeek) {
  // console.log(day);
  const open = russianRestaurant.workingHours[day]?.open ?? 'never';
  console.log(`On ${day} restaurant opens at ${open}`);
}

//------------------- Methods
console.log(russianRestaurant.orderFood?.(1, 2) ?? 'Method does not exist');
console.log(russianRestaurant.order?.(1, 2) ?? 'Method does not exist');

// -------------------Arrays

const posts = [
  {
    name: 'JS is cool!',
    username: 'Ted',
  },
  {
    name: 'JS is shit!',
    username: 'Dick',
  },
];

const users = [];

console.log(posts[0]?.name ?? 'This post does not exist');
console.log(posts[2]?.name ?? 'This post does not exist');

// -------------Check if the array is empty
console.log(posts[0]?.name ?? 'The array is empty');
console.log(users[0]?.name ?? 'The array is empty');

if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log('The array is empty');
}

if (russianRestaurant.workingHours.fri) {
  console.log(russianRestaurant.workingHours.fri.open);
}
