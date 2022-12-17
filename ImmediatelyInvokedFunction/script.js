'use strict';
//----------------------------------------------- Immediately Invoked Function Expression (IIFE)---------------------------------------------------

const runOneTime = function () {
  console.log('First You will never see this function call again.');
};
// runOneTime();
// runOneTime();

(function () {
  console.log('Second You will never see this function call again.');
  const a = 1;
  var z = 3;
})();

(() =>
  console.log('Third You will never see this ARROW function call again.'))();

{
  const c = 1;
  var y = 2;
}
console.log('block', y);
//console.log('block2', c); // Uncaught ReferenceError: c is not defined

//console.log(z); // Uncaught ReferenceError: z is not defined
console.log(a); // Uncaught ReferenceError: a is not defined
