'use strict';
// --------------------------------------------------------------------------Primitives VS Reference Types-----------------------------------------------------

// let a = 1;
// let b = a;
// a = 2;
// console.log(a);
// console.log(b);

// const x = {
//   foo: 'bar',
//   a: 1,
// };

// const y = x;
// y.a = 2;

// console.log('Object x: ', x);
// console.log('Object y: ', y);

//-------------------------------------Primitives
let lastName = 'Brown';
let oldLastName = lastName;
lastName = 'White';
console.log(lastName, oldLastName);

// -------------------------------------Objects
const jane = {
  firstName: 'Jane',
  lastName: 'Brown',
  age: 21,
};

const marriedJane = jane;
marriedJane.lastName = 'White';
console.log('Jane: ', jane);
console.log('Married Jane: ', marriedJane);
// marriedJane = {};

// -------------------------------Objects copying

const sara = {
  firstName: 'Sara',
  lastName: 'Brown',
  age: 25,
  familyMembers: ['Jack', 'Bob', 'Greta'],
};

const saraCopy = Object.assign({}, sara);
saraCopy.lastName = 'White';
saraCopy.familyMembers.push('Bill', 'Marta');

console.log('Sara: ', sara);
console.log('Married Sara: ', saraCopy);
