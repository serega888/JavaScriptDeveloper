'use strict';
const russianRestaurant = {
  name: 'Вкусная еда',
  location: 'Аппетитная 88, Краснодар, Россия',
  categories: ['Сладости', 'Первое блюдо', 'Второе блюдо', 'Напитки'],
  appetizers: ['Рыба', 'Гороховый суп', 'Плов', 'Кампот'],
  mainMenu: ['Борщ', 'Картофель в мундире', 'Чай'],

  orderFood: function (appetizersIndex, mainMenuIndex) {
    return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  },
};

const arrDest = [10, 20, 30];
const xDest = arrDest[0];
const xDestTwo = arrDest[1];
const xDestThree = arrDest[2];
console.log(xDest, xDestTwo, xDestThree);

//----------or c деструктуризацией массива-------------
const [yDest, yDestTwo, yDestThree] = arrDest;
console.log(yDest, yDestTwo, yDestThree);

const [zDest, zDestTwo, zDestThree] = arrDest;
console.log(zDest, zDestTwo, zDestThree);

const [catOne, catTwo] = russianRestaurant.categories;
console.log(catOne, catTwo);

const [categoryOne, , categoryThree] = russianRestaurant.categories;
console.log(categoryOne, categoryThree);

//------------------Поменять местами без деструктуризаци----------------------------------------------

console.log('Поменять местами без деструктуризаци');
let [categoryFirst, , categoryThird] = russianRestaurant.categories;
console.log(categoryFirst, categoryThird);

const temp = categoryFirst;
categoryFirst = categoryThird;
categoryThird = temp;
console.log(categoryFirst, categoryThird);
console.log(russianRestaurant.categories);
//--------------------------------Поменять местами с деструктуризацией---------
console.log('Поменять местами с деструктуризацией');
let [categoryFirstDest, , categoryThirdDest] = russianRestaurant.categories;
console.log(categoryFirstDest, categoryThirdDest);

[categoryThirdDest, categoryFirstDest] = [categoryFirstDest, categoryThirdDest];
console.log(categoryFirstDest, categoryThirdDest);
console.log(russianRestaurant.categories);

console.log(russianRestaurant.orderFood(3, 1));
const [appetizerDest, mainDest] = russianRestaurant.orderFood(3, 1);
console.log(appetizerDest, mainDest);

const nestedArrDest = [30, 40, 50, [110, 130]];
let [firstValueDest, , , forthArrDest] = nestedArrDest;
console.log(firstValueDest, forthArrDest);

const [firstValueDestTwo, , , [firstNestedValueDest, secondNestedValueDest]] =
  nestedArrDest;
console.log(firstValueDestTwo, firstNestedValueDest, secondNestedValueDest);

//----------------Когда мы не знаем сколько количество элементов в массиве используем DefaultValues-----
const unknowArrDest = [50, 60];
const [
  unknowArrDestFirst = 0,
  unknowArrDestSecond = 0,
  unknowArrDestThird = 0,
] = unknowArrDest;
console.log(unknowArrDestFirst, unknowArrDestSecond, unknowArrDestThird);
