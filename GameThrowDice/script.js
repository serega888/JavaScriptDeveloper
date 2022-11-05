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

let currentScore, totalScores, activePlayer, isCanPlay;

const startGame = function () {
  currentScore = 0;
  totalScores = [0, 0];
  activePlayer = 0;
  isCanPlay = true;

  scoreZeroElement.textContent = 0;
  scoreOneElement.textContent = 0;
  currentScoreZeroElement.textContent = 0;
  currentScoreOneElement.textContent = 0;
  diceElement.classList.add('hidden');
  playerZeroElement.classList.remove('player--winner');
  playerOneElement.classList.remove('player--winner');
  playerZeroElement.classList.remove('player--active');
  playerOneElement.classList.remove('player--active');
  playerZeroElement.classList.add('player--active');
};

startGame();

const switchActivePlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;

  activePlayer = activePlayer === 0 ? 1 : 0;
  console.log('active player', activePlayer);
  playerZeroElement.classList.toggle('player--active');
  playerOneElement.classList.toggle('player--active');
};

btnRollElement.addEventListener('click', function () {
  if (isCanPlay) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber);

    diceElement.classList.remove('hidden');
    diceElement.src = `dice${diceNumber}.png`;

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchActivePlayer();
    }
  }
});

btnHoldElement.addEventListener('click', function () {
  if (isCanPlay) {
    totalScores[activePlayer] += currentScore;
    currentScore = 0;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScores[activePlayer];
    if (totalScores[activePlayer] >= 50) {
      isCanPlay = false;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceElement.classList.add('hidden');
    } else {
      switchActivePlayer();
    }
  }
});

btnNewElement.addEventListener('click', startGame);
