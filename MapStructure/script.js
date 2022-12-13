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
//------------------------------------------------------------------------------ Map structure---------------------------------------------------------------

const collection = new Map();
collection.set('name', 'Sergey');
collection.set(1, 'Greeen, Gray');
collection.set(2, 'Red, Yellow');
console.log(collection.set(3, 'Black, White'));

collection
  .set('categories', ['Сладости', 'Первое блюдо', 'Второе блюдо', 'Напитки'])
  .set('open', 10)
  .set('close', 23)
  .set(true, 'Bench is open :)')
  .set(false, 'Bench is closed :(');

console.log(collection.get('name'));
console.log(collection.get(true));
console.log(collection.get(3));

const currentTime = 11;
console.log(
  collection.get(
    currentTime > collection.get('open') &&
      currentTime < collection.get('close')
  )
);

console.log(collection.has(false));
console.log(collection.delete(1));
// collection.clear();
const arr = [1, 2, 3];
collection.set(arr, 'Hello!');
collection.set(document.querySelector('h2'), 'Heading');
console.log(collection);
console.log(collection.size);

console.log(collection.get(arr));
// ------------------Map. Iteration

const question = new Map([
  ['question', 'What is the most popular programming language for front-end?'],
  [1, 'JavaScript'],
  [2, 'Java'],
  [3, 'Python'],
  ['correctAnswer', 1],
  [true, 'Correct answer :D'],
  [false, 'This is incorrect :( Try again!'],
]);

console.log(question);

// Converting objects to maps
console.log(Object.entries(workingHoursWithES6));
const workingHoursMap = new Map(Object.entries(workingHoursWithES6));
console.log(workingHoursMap);

// --------------Quiz app
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`${key}: ${value}`);
  }
}

const userAnswer = Number(prompt('Choose the option number'));
console.log(userAnswer);

console.log(question.get(question.get('correctAnswer') === userAnswer));

//--------Converting maps to arrays
console.log([...question]);

// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
