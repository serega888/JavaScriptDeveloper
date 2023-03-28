'use strict';
// -------------------------------------------------------------------------Arrays HomeTaskTwo-----------------------------------------------------------

// Вернемся к исследованию кошек Женей и Юлей. На этот раз они хотят преобразовать возраст кошек в человеческий возраст и вычислить средний возраст кошек в своем исследовании.
// Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) и выполняет следующие действия по порядку:

// 1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года, человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, человеческий возраст = возраст кошки * 7.
// 2. Исключает всех кошек младше 18 человеческих лет.
// 3. Возвращает средний человеческий возраст для всех взрослых кошек.

// Вызовите функцию для обоих наборов тестовых данных.
// Тестовые данные:
// 1: [5, 3, 2, 4, 7, 12, 8, 1, 9, 2]
// 2: [3, 16, 6, 4, 5, 10, 3, 11, 7, 2]

const getAverageHumanAge = function (catAges) {
  const getHumanAges = catAges.map(catAge =>
    catAge <= 2 ? catAge * 10 : catAge * 7
  );
  // console.log(getHumanAges);

  const adultCats = getHumanAges.filter(catAge => catAge >= 18);
  // console.log(adultCats);

  const averageAgeAdultCat =
    adultCats.reduce((acc, adultCats) => acc + adultCats, 0) / adultCats.length;
  // console.log(averageAgeAdultCat);

  return averageAgeAdultCat;
};

const catAgesOne = getAverageHumanAge([7, 3, 2, 4, 1, 15, 8, 1, 9, 2]);
console.log(catAgesOne);

const agesTwo = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];
const catAgesTwo = getAverageHumanAge(agesTwo);
console.log(catAgesTwo);
