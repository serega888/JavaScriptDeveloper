'use strict';
const scoreZeroElement = document.querySelector('#score--0');
const scoreOneElement = document.getElementById('score--1');
const currentScoreZeroElement = document.getElementById('current--0');
const currentScoreOneElement = document.getElementById('current--1');
const playerZeroElement = document.querySelector('.player--0');
const playerOneElement = document.querySelector('.player--1');
const diceElement = document.querySelector('.dice');
const btnNewElement = document.querySelector('.btn--new');
const btnRollElement = document.querySelector('.btn--roll');
const btnHoldElement = document.querySelector('.btn--hold');

scoreZeroElement.textContent = 0;
scoreOneElement.textContent = 0;
diceElement.classList.add('hidden');
let currentScore = 0;
const totalScores = [0, 0];
let activePlayer = 0;

btnRollElement.addEventListener('click', function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(diceNumber);

  diceElement.classList.remove('hidden');
  diceElement.src = `dice${diceNumber}.png`;

  if (diceNumber !== 1) {
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    activePlayer = activePlayer === 0 ? 1 : 0;
    console.log('active player', activePlayer);
    playerZeroElement.classList.toggle('player--active');
    playerOneElement.classList.toggle('player--active');
  }
});
