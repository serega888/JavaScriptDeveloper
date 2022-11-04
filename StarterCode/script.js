'use strict';
// console.log(document.querySelector('.guess-message').textContent);
// const ddd = (document.querySelector('.guess-message').textContent =
//   'start win');
// console.log(ddd);
// --------------------------------------------Manipulation Elements---------------------------------
// console.log('Manipulation Elements');
// console.log(document.querySelector('.guess-message').textContent);
// document.querySelector('.guess-message').textContent = 'You Right!';
// document.querySelector('.question').textContent = 7;
// document.querySelector('.score').textContent = 11;
// document.querySelector('.number-input').value = 8;
// --------------------------------------------Event & EventHandlers---------------------------------
// console.log('Event & EventHandlers');
// document.querySelector('.check').addEventListener('click', function () {
//   const guessingNumber = Number(document.querySelector('.number-input').value);
//   console.log(guessingNumber, typeof guessingNumber);

//   if (!guessingNumber) {
//     document.querySelector('.guess-message').textContent = 'Введите число!';
//   }
// });

// --------------------------------------------Имплементация логики---------------------------------
// console.log('Имплементация логики');

// const secretNumber = Math.trunc(Math.random() * 10) + 1;
// let score = 3;
// document.querySelector('.question').textContent = secretNumber;
// console.log(secretNumber);

// document.querySelector('.check').addEventListener('click', function () {
//   const guessingNumber = Number(document.querySelector('.number-input').value);
//   console.log(guessingNumber, typeof guessingNumber);

//   if (!guessingNumber) {
//     document.querySelector('.guess-message').textContent = 'Введите число!';
//   } else if (guessingNumber === secretNumber) {
//     document.querySelector('.guess-message').textContent = 'Правильно!';
//   } else if (guessingNumber > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.guess-message').textContent = 'Много!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       score = 0;
//       document.querySelector('.guess-message').textContent = 'Игра окончена!';
//       document.querySelector('.score').textContent = score;
//     }
//   } else if (guessingNumber < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.guess-message').textContent = 'Мало!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       score = 0;
//       document.querySelector('.guess-message').textContent = 'Игра окончена!';
//       document.querySelector('.score').textContent = score;
//     }
//   }
// });

// --------------------------------------------Изменение CSS с помощью JavaScript---------------------------------
// console.log('Изменение CSS с помощью JavaScript');

// const secretNumber = Math.trunc(Math.random() * 10) + 1;
// let score = 3;
// document.querySelector('.question').textContent = secretNumber;
// console.log(secretNumber);

// document.querySelector('.check').addEventListener('click', function () {
//   const guessingNumber = Number(document.querySelector('.number-input').value);
//   console.log(guessingNumber, typeof guessingNumber);

//   if (!guessingNumber) {
//     document.querySelector('.guess-message').textContent = 'Введите число!';
//   } else if (guessingNumber === secretNumber) {
//     document.querySelector('.guess-message').textContent = 'Правильно!';
//     document.querySelector('body').style.backgroundColor = 'green';
//     document.querySelector('.question').style.width = '50rem';
//   } else if (guessingNumber > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.guess-message').textContent = 'Много!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       score = 0;
//       document.querySelector('.guess-message').textContent = 'Игра окончена!';
//       document.querySelector('.score').textContent = score;
//     }
//   } else if (guessingNumber < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.guess-message').textContent = 'Мало!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       score = 0;
//       document.querySelector('.guess-message').textContent = 'Игра окончена!';
//       document.querySelector('.score').textContent = score;
//     }
//   }
// });

// --------------------------------------------Челендж начать игру сначла---------------------------------
// console.log('Челендж начать игру сначла');

// let secretNumber = Math.trunc(Math.random() * 10) + 1;
// let score = 3;
// console.log(secretNumber);

// document.querySelector('.check').addEventListener('click', function () {
//   const guessingNumber = Number(document.querySelector('.number-input').value);
//   console.log(guessingNumber, typeof guessingNumber);

//   if (!guessingNumber) {
//     document.querySelector('.guess-message').textContent = 'Введите число!';
//   } else if (guessingNumber === secretNumber) {
//     document.querySelector('.guess-message').textContent = 'Правильно!';
//     document.querySelector('body').style.backgroundColor = 'green';
//     document.querySelector('.question').style.width = '50rem';
//   } else if (guessingNumber > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.guess-message').textContent = 'Много!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       score = 0;
//       document.querySelector('.guess-message').textContent = 'Игра окончена!';
//       document.querySelector('.score').textContent = score;
//     }
//   } else if (guessingNumber < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.guess-message').textContent = 'Мало!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       score = 0;
//       document.querySelector('.guess-message').textContent = 'Игра окончена!';
//       document.querySelector('.score').textContent = score;
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   secretNumber = Math.trunc(Math.random() * 10) + 1;
//   console.log(secretNumber);
//   let score = 3;

//   document.querySelector('.guess-message').textContent = 'Начни угадывать';
//   document.querySelector('body').style.backgroundColor = 'black';
//   document.querySelector('.question').style.width = '25rem';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number-input').value = '';
// });

// --------------------------------------------Лучший результат---------------------------------
// console.log('Лучший результат');

// let secretNumber = Math.trunc(Math.random() * 10) + 1;
// let score = 3;
// let highScore = 0;
// console.log(secretNumber);

// document.querySelector('.check').addEventListener('click', function () {
//   const guessingNumber = Number(document.querySelector('.number-input').value);
//   console.log(guessingNumber, typeof guessingNumber);

//   if (!guessingNumber) {
//     document.querySelector('.guess-message').textContent = 'Введите число!';
//   } else if (guessingNumber === secretNumber) {
//     document.querySelector('.guess-message').textContent = 'Правильно!';
//     document.querySelector('body').style.backgroundColor = 'green';
//     document.querySelector('.question').style.width = '50rem';

//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }
//   } else if (guessingNumber > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.guess-message').textContent = 'Много!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       score = 0;
//       document.querySelector('.guess-message').textContent = 'Игра окончена!';
//       document.querySelector('.score').textContent = score;
//     }
//   } else if (guessingNumber < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.guess-message').textContent = 'Мало!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       score = 0;
//       document.querySelector('.guess-message').textContent = 'Игра окончена!';
//       document.querySelector('.score').textContent = score;
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   secretNumber = Math.trunc(Math.random() * 10) + 1;
//   console.log(secretNumber);
//   score = 3;

//   document.querySelector('.guess-message').textContent = 'Начни угадывать';
//   document.querySelector('body').style.backgroundColor = 'black';
//   document.querySelector('.question').style.width = '25rem';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number-input').value = '';
// });

//--------------------------------------------Рефакторинг кода---------------------------------
console.log('Рефакторинг кода');

let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 3;
let highScore = 0;
console.log(secretNumber);

const getGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

const getScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const getHighScore = function (highScore) {
  document.querySelector('.highscore').textContent = highScore;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber, typeof guessingNumber);

  if (!guessingNumber) {
    getGuessMessage('Введите число!');
  } else if (guessingNumber === secretNumber) {
    getGuessMessage('Правильно!');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.question').style.width = '50rem';

    if (score > highScore) {
      highScore = score;
      getHighScore(highScore);
    }
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      guessingNumber > secretNumber
        ? getGuessMessage('Много!')
        : getGuessMessage('Мало!');

      score--;
      getScore(score);
    } else {
      score = 0;

      getGuessMessage('Игра окончена!');
      getScore(score);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  console.log(secretNumber);
  score = 3;

  getGuessMessage('Начни угадывать!');
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.question').style.width = '25rem';
  getScore(score);
  document.querySelector('.number-input').value = '';
});
