'use strict';
//-----------------------------------------------Таймеры------------------------------------------------

//-----------------------------setTimeout()-----------------------------
const ingridients = ['Рыба', 'Помидоры'];
const pizzaTimer = setTimeout(
  (ingrid1, ingrid2) =>
    console.log(`Ваша пицца доставлена! Ингридиенты: ${ingrid1}, ${ingrid2}`),
  5000,
  ...ingridients
);
console.log('Ожидание...');

if (ingridients.includes('Рыба')) clearTimeout(pizzaTimer);

const ingridientsTwo = ['Лук', 'Помидоры', 'Колбаса'];

const salatTimer = setTimeout(
  (ingrid1, ingrid2, ingrid3) =>
    console.log(
      `Ваш салат доставлен! Ингридиенты: ${ingrid1}, ${ingrid2}, ${ingrid3}`
    ),
  7000,
  ...ingridientsTwo
);
console.log('Ожидание...');

// setInterval()
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 10000);
