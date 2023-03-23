'use strict';
//------------------------------------------------------------------------------ HomeTaskOne------------------------------------------------
// We are creating a soccer betting app!
// Let's say we are getting data about a specific game from a web service (the game variable below). Your tasks:

// 1. Create separate arrays with players for each team (variables players1 and players2).
// 2. The first player in each of these arrays is the goalkeeper and the rest are the field players. For REAL MADRID (team1) create one variable (goalkeeper) with the name of the goalkeeper and one array (fieldPlayers) with all the remaining 10 field players.
// 3. Create an array allPlayers containing all players from both teams (22 players).
// 4. REAL MADRID (team1) used 5 substitute players during the game. Create a new array (players1Total) containing all original players of team1 as well as ‘Marcelo’, 'Isco', 'Asensio', ‘Diaz' and 'Odriozola'.
// 5. Based on the game.odds object, create one variable for each odd (called team1, draw and team2).
// 6. A write function printGoals that takes an arbitrary number of player names (NOT an array) and prints each one to the console along with the total number of goals scored (the number of player names passed to the function).
// 7. The team with the lower odds will win more likely. Print to the console which team is more likely to win, WITHOUT using an if / else or ternary operator.
// Test data for 6.: First use 'Mingueza', 'Messi', 'Modrich' and 'Nacho' players. Then call the function again with the players from game.scored.

const game = {
  teamOne: 'REAL MADRID',
  teamTwo: 'BARCELONA',
  players: [
    [
      'Courtois',
      'Vazquez',
      'Militao',
      'Nacho',
      'Mendy',
      'Casemiro',
      'Valverde',
      'Modrich',
      'Kroos',
      'Vinicius',
      'Benzema',
    ],
    [
      'Stegen',
      'Mingueza',
      'Araujo',
      'Lenglet',
      'Dest',
      'Busquets',
      'Jong',
      'Alba',
      'Messi',
      'Pedri',
      'Dembele',
    ],
  ],
  score: '2:1',
  scored: ['Kroos', 'Benzema', 'Mingueza'],
  date: 'Apr 10th, 2021',
  odds: {
    teamOne: 1.48,
    draw: 2.53,
    teamTwo: 4.25,
  },
};

// 1. Create separate arrays with players for each team (variables players1 and players2).
console.log('1.');
const [playersOne, playersTwo] = game.players;
console.log(playersOne, playersTwo);

// 2. The first player in each of these arrays is the goalkeeper and the rest are the field players. For REAL MADRID (team1) create one variable (goalkeeper) with the name of the goalkeeper and one array (fieldPlayers) with all the remaining 10 field players.
console.log('2.');
const [goalKeeper, ...fieldPlayers] = playersOne;
console.log(goalKeeper, fieldPlayers);

// 3. Create an array allPlayers containing all players from both teams (22 players).
console.log('3.');
const allPlayers = [...playersOne, ...playersTwo];
console.log(allPlayers);

// 4. REAL MADRID (team1) used 5 substitute players during the game. Create a new array (players1Total) containing all original players of team1 as well as ‘Marcelo’, 'Isco', 'Asensio', ‘Diaz' and 'Odriozola'.
console.log('4.');
const playersOneTotal = [
  ...playersOne,
  'Marcelo',
  'Isco',
  'Asensio',
  'Diaz',
  'Odriozola',
];
console.log(playersOneTotal);

// 5. Based on the game.odds object, create one variable for each odd (called team1, draw and team2).
console.log('5.');
const {
  odds: { teamOne, draw, teamTwo },
} = game;
console.log(teamOne, teamTwo, draw);

// 6. A write function printGoals that takes an arbitrary number of player names (NOT an array) and prints each one to the console along with the total number of goals scored (the number of player names passed to the function).
console.log('6.');
const printGoals = function (...gamePlayers) {
  console.log(gamePlayers);
  console.log(`${gamePlayers.length} goals scored`);
  for (let i = 0; i < gamePlayers.length; i++) {
    console.log(`${gamePlayers[i]} goal scored`);
  }
};

printGoals('Mingueza', 'Messi', 'Modrich', 'Nacho');
printGoals(...game.scored);

// 7. The team with the lower odds will win more likely. Print to the console which team is more likely to win, WITHOUT using an if / else or ternary operator.
// Test data for 6.: First use 'Mingueza', 'Messi', 'Modrich' and 'Nacho' players. Then call the function again with the players from game.scored.
console.log('7.');
teamOne < teamTwo && console.log(`${game.teamOne} is more likely to win.`);
teamOne > teamTwo && console.log(`${game.teamTwo} is more likely to win.`);
