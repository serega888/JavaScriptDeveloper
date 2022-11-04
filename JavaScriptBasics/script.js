const brand = 'Toyota';
const model = 'Camry';
const year = '2019';
let carHtml;
carHtml = `
    <h3>Car Description</h3>
    <ul>
        <li>Brand: ${brand}</li>
        <li>Model: ${model}</li>
        <li>Doors: ${getDoorsNumber()}</li>
        <li>Tax: ${year < 2000 ? '20%' : '10%'}</li>
    </ul>
`;
function getDoorsNumber() {
  return 5;
}
document.body.innerHTML = carHtml;
const x = 10;
console.log(x > 5);
console.log("Hi 'Hello console'");
// /****************************************************************************Variables var and Commentary*************************************
// ****************************/

// console.log('var variables');
// var nameTest = 'Sergey';
// console.log(nameTest);
// nameTest = 'Jack';
// console.log(nameTest);
// var colorTest;
// console.log(colorTest);
// colorTest = 'red';
// console.log(colorTest);
// // JavaScript names can include
// // letters, numbers, $, _
// /********************
// JavaScript variables names can't start
// with number
// ************************************************************/
// /**************************************************************************Variables LET and CONST*************************************
// ****************************/

// console.log('let variables');
// let nameTest2 = 'Sergey';
// console.log(nameTest2);
// nameTest = 'Jack';
// console.log(nameTest);
// let colorTest2;
// console.log(colorTest2);
// colorTest = 'red';
// console.log(colorTest);
// console.log('const variables');
// const nameTest3 = 'Green';
// console.log(nameTest3);
// /***********************************error*******************
// // nameTest3 = 'Blue'; // error
// // console.log(nameTest3);
// ***********************************/
// const colorTest3 = 'White';
// console.log(colorTest3);

// const userTest = {
//     nameTest3: 'Jack',
//     gender: 'male',
//     age: 24
// }
// console.log(userTest);
// userTest.nameTest3 = 'Sergey';
// console.log(userTest);
// /**************** error************
// // userTest = {
// //     nameTest3: 'Red',
// //     gender: 'male',
// //     age: 24
// // }
// // console.log(userTest);
// ************************************/
// const arrays = ['red', 'orange', 'green'];
// console.log(arrays);

// arrays.push('blue');
// console.log(arrays);
// /***************** error***********************
// arrays = ['red', 'orange', 'green'];
// console.log(arrays);
// *********************************/

// /*************************************************************************Type of Datas*************************************
// ****************************/
// /********************************************Primitive data types *****
// String, Number, Boolean, Null, Undefined, Symbols(ES6)
// */
// /*****************************Reference data types *******
// Array, Object Literal, Function, Date, Anything else....
// ************/
// console.log('Primitive data types');
// let xString = 'something';
// console.log(xString);
// xString = 3;
// console.log(xString);

// // String
// console.log('Primitive data types: String');
// const someText = 'Some text';
// console.log(typeof someText);

// // Number
// console.log('Primitive data types: Number');
// const someNumber = 10;
// console.log(typeof someNumber);

// // Boolean
// console.log('Primitive data types: Boolean');
// const someBoolean = true;
// console.log(typeof someBoolean);

// // Null
// console.log('Primitive data types: Null');
// const someNull = null; // Primitive data type
// console.log(typeof someNull);

// // Undefined
// console.log('Primitive data types: Undefined');
// // const someUndefined; // error
// // console.log(typeof someUndefined);
// let someUndefined2;
// console.log(someUndefined2);

// // Symbol(ES6)
// console.log('Primitive data types: Symbol');
// const someSymbol = Symbol();
// console.log(typeof someSymbol);

// /*****************************Reference data types *******
// Array, Object Literal, Function, Date, Anything else....
// ************/
// console.log('Reference data types - return object');

// // Array
// console.log('Reference data types: Array - return object');
// const someArray = [1, 2, 3, 4];
// console.log(someArray);
// console.log(typeof someArray);

// // Object Literal
// console.log('Reference data types: Object Literal - return object');
// const someObjectLiteral = {
//     firstProperty: 10,
//     secondProperty: 'secondProperty'
// };
// console.log(someObjectLiteral);
// console.log(typeof someObjectLiteral);

// // Function
// console.log('Reference data types: Function - return function(object)');
// const someFunction = new Function();
// console.log(someFunction);
// console.log(typeof someFunction);

// // Date
// console.log('Reference data types: Date - return object');
// const someDate = new Date();
// console.log(someDate);
// console.log(typeof someDate);

// /***********************************************************Type Conversion (Преобразование типов)*************************************
// ****************************/
// // Conversion To String
// // Function String()
// console.log('Type Conversion (Преобразование типов)')
// console.log('Conversion To String');
// let xConversionToString = String(111);
// xConversionToString = String(2+2);
// xConversionToString = String(false);
// xConversionToString = String(new Date());
// xConversionToString = String([1, 2, 3, 4]);

// //method toString()
// xConversionToString = (35).toString();
// xConversionToString = (true).toString();

// console.log(xConversionToString);
// console.log(typeof xConversionToString);
// console.log(xConversionToString.length);

// // Conversion To Number
// // function Number()

// console.log('Type Conversion (Преобразование типов)')
// console.log('Conversion To Number');
// let yConversionToNumber = Number('5.12345');
// yConversionToNumber = Number(false);
// yConversionToNumber = Number('text'); // NaN не число. не возможно распознать как число
// yConversionToNumber = Number([1, 2, 3]); // NaN не число. не возможно распознать как число

// // method parseInt(), parseFloat()

// yConversionToNumber = parseInt('123'); // 123.0
// yConversionToNumber = parseFloat('123.12345'); // 123.1

// console.log(yConversionToNumber);
// console.log(typeof yConversionToNumber);
// console.log(yConversionToNumber.toPrecision(4));

// /***********************************************************Operation with Numbers*************************************
// ****************************/
// console.log('Operation with Numbers');
// const firstNumber = 50;
// const secondNumber = 10;
// let resultNumber;

// // Simple math operations
// resultNumber = firstNumber + secondNumber;
// resultNumber = firstNumber - secondNumber;
// resultNumber = firstNumber * secondNumber;
// resultNumber = firstNumber / secondNumber;
// resultNumber = firstNumber % secondNumber;

// // math object
// resultNumber = Math.PI; // 3.141592653589793
// resultNumber = Math.round(3.5); // 4
// resultNumber = Math.ceil(3.3); // 4
// resultNumber = Math.floor(3.7); // 3
// resultNumber = Math.sqrt(81); // 9
// resultNumber = Math.abs(-9); // 9
// resultNumber = Math.pow(2, 3); // 8
// resultNumber = Math.min(2, 4, 9, 1, 5); // 1
// resultNumber = Math.max(20, 2, 40); // 40
// resultNumber = Math.floor(Math.random() * 100); // от 0 до 99
// resultNumber = Math.floor(Math.random() * 100) + 1; // от 1 до 100

// console.log(resultNumber);

// /*********************************************************** Strings *************************************
// ****************************/
// console.log('Strings');
// let resultString;
// const firstName = 'Sergey';
// const lastName = 'Fadin';
// const space = ' ';
// const age = 29;
// const greeting = "Hey there!";

// resultString = firstName + space + lastName;// Sergey Fadin
// resultString = greeting + space + 'My name is'
//             + space + firstName + space + lastName + ". I'm" + space + age + space + 'years old.'; //Hey there! My name is Sergey Fadin. I'm 29 years old.

// // Escaping экранирование (\)
// resultString = 'I\'m 29 years old'; // I'm 29 years old
// resultString = "I  like eat \"Pizza\""; // I  like eat "Pizza"

// // Properties and methods
// resultString = resultString.length;

// // method concat()
// resultString = firstName.concat(space, lastName); // Sergey Fadin

// // toUpperCase(), toLowerCase()
// resultString = firstName.toUpperCase(); // SERGEY
// resultString = firstName.toLocaleUpperCase(); // SERGEY
// resultString = firstName.toLowerCase(); // sergey
// resultString = firstName.toLocaleLowerCase(); // sergey

// // Index
// resultString = firstName[0]; // S
// resultString = firstName.indexOf('S'); // 0
// resultString = firstName.indexOf('e'); // 1
// resultString = firstName.lastIndexOf('e'); // 4
// resultString = firstName.indexOf('er'); // 1
// resultString = firstName.indexOf('a'); // -1

// // charAt()
// resultString = firstName.charAt(0); // S
// resultString = firstName.charAt(firstName.length - 1); // последний символ y
// resultString = firstName.charAt(firstName.lastIndexOf('e')); // e

// // substring()
// resultString = firstName.substring(firstName.indexOf('e'), firstName.lastIndexOf('y')); // erge
// resultString = firstName.substring(1, 5); // erge

// // slice()
// resultString = firstName.slice(1, 5); // erge
// resultString = firstName.slice(-2); // ey
// resultString = firstName.slice(firstName.indexOf('e'), firstName.lastIndexOf('y')); //erge
// resultString = firstName.slice(-firstName.indexOf('e')); // y

// //split()
// resultString = greeting.split(space); // ['Hey', 'there!']
// const colors = 'red, blue, yellow, white';
// resultString = colors.split(','); // ['red', ' blue', ' yellow', ' white']

// // replace()
// resultString = colors.replace('red', 'green'); // green, blue, yellow, white

// // includes()
// resultString = colors.includes('green'); // false
// resultString = colors.includes('red'); // true

// console.log(resultString);

// /*********************************************************** Template of Strings *************************************
// ****************************/
// console.log('Template Strings - Шаблонные строки');
// const myBrand = 'Toyota';
// const myModel = 'Camry';
// const myColor = 'Green';
// const myYear = '2019';

// let myCarHtml;

// // Old approach(before ES 6)
// myCarHtml = '</br>' + '<h3>' + 'Car description'
// + '</h3>' +
// '<ul>' +
// '<li>Brand: ' + myBrand + '</li>' +
// '<li>Brand: ' + myModel + '</li>' +
// '<li>Brand: ' + myColor + '</li>' +
// '<li>Brand: ' + myYear + '</li>' +
// '</ul>';

// // New approach(with ES6) template literals or template strings
// myCarHtml = `
//     <h3>Car Description</h3>
//     <ul>
//         <li>Brand: ${myBrand}</li>
//         <li>Model: ${myModel}</li>
//         <li>Color: ${myColor}</li>
//         <li>Year: ${myYear}</li>
//         <li>Doors: ${myGetDoorsNumber()}</li>
//         <li>Tas: ${myYear < 2000 ? '20%' : '10%'}</li>
//     </ul>

// `
// function myGetDoorsNumber() {
//     return 5;
// }

// document.body.innerHTML = myCarHtml;
// console.log(document.body.innerHTML);

// /*********************************************************** Questionary Task(Задание Анкета)*************************************
// ****************************/
// console.log('Questionary Task(Задание Анкета)');
// let favoriteColor;
// const question = 'What is your favorite color?';
// const answer = 'Your favorite color is';

// // favoriteColor = prompt(question);

// console.log(answer + space + favoriteColor);

// // const firstQuestion = prompt('What\'s your name?');
// // const secondQuestion = prompt('What\'s your last name?');
// // const thirdQuestion = prompt('What\'s your age?');

// // console.log('your name is' + space + firstQuestion + space +
// // ', your last name is' + space + secondQuestion + space +
// // ', your age is' + space + thirdQuestion + '.'); // your name is sergey , your last name is fadin , your age is 29.

// /*********************************************************** Comparison operators(Операторы сравнения) *************************************
// ****************************/
// console.log('Comparison operators(Операторы сравнения)');
// const xNumber = 10;
// const yNumber = 5;
// const yString = '10';
// const xMyString = '10';

// let isXNumberMoreThanYNumber = xNumber > yNumber;
// console.log(isXNumberMoreThanYNumber); // true

// let isXNumberLessThanYNumber = xNumber < yNumber;
// console.log(isXNumberLessThanYNumber); // false

// let isEquals = xNumber == yNumber;
// console.log(isEquals); // false

// let isEqualsNotStrong = xNumber == yString;
// console.log(isEqualsNotStrong); // true

// let isEqualsStrong = xNumber === yString;
// console.log(isEqualsStrong); // false

// let isNotEqualsNotStrong = xMyString != yString;
// console.log(isNotEqualsNotStrong); // false

// let isNotEqualsStrong = xMyString !== yString;
// console.log(isNotEqualsStrong); // false

// // Неожиданные результаты
// console.log('Неожиданные результаты');
// console.log(true == 1); // true
// console.log(true == '1'); // true
// console.log(false == 0); // true
// console.log(false == '0'); // true
// console.log(null == undefined); // true
// console.log(NaN == NaN); // false
// console.log(NaN === NaN); // false

// /*********************************************************** Operator precedence(Приоритет операторов) *************************************
// ****************************/
// console.log('Operator precedence(Приоритет операторов)');
// console.log('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence');
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// let xOperator, yOperator;
// console.log(xOperator, yOperator); //undefined undefined

// xOperator = yOperator = 10 - 5 + 4 * 3;
// console.log(xOperator, yOperator); // 17 17

// xOperator = yOperator = 10 - (5 + 4) * 3;
// console.log(xOperator, yOperator); // -17 -17

// /*********************************************************** Operator contraction(Сокращенная форма записи) *************************************
// ****************************/
// console.log('Operator contraction(Сокращенная форма записи)');
// let xContraction = 5;

// xContraction += 7; // 12
// xContraction -= 2; // 10
// xContraction *= 3; // 30
// xContraction /= 2; // 15

// console.log(xContraction); // 15

// // PostFixRecord
// let zContraction = 5;
// let yContraction = 3;
// //console.log('PostFixRecord');
// //yContraction = zContraction--; // 4, 5
// //yContraction = zContraction++; // 6, 5

// //PreFixRecord
// //yContraction = --zContraction; // 4, 4
// yContraction = ++zContraction; //6, 6

// console.log(zContraction, yContraction);

// /*********************************************************** (21 Задание лишний вес) *************************************
// ****************************/
// // console.log('(21 Задание лишний вес)');
// // const weight = prompt('Enter your weight in kilograms');
// // const height = prompt('Enter your height in meters');

// // const bodyMassIndex = weight / Math.pow(height, 2);
// // const areYouOverWeight = bodyMassIndex >= 25;

// // console.log('bodyMassIndex',bodyMassIndex);
// // console.log('areYouOverWeight', areYouOverWeight);

// // alert('Are you over weight?' + space + areYouOverWeight);

// /*********************************************************** (If Else) *************************************
// ****************************/
// console.log('(If Else)');
// const myAge = 15;
// const adult = 18;
// const isAdult = myAge >= adult;
// if (isAdult){
//     console.log('You can watch this video');
// }
// else {
//     console.log('You can\'t watch this video');
//     const yearsLeft = adult - myAge;
//     console.log(`You are too young.
//     You can whatch this video after ${yearsLeft} years later`);
// }

// const birthYear = 1990;
// const yearNow = 2022;
// const myAgeTwo = yearNow - birthYear;

// let myAnswer;

// if(myAgeTwo >= 16){
//     myAnswer = 'Yes';
// }
// else {
//     myAnswer = 'No';
// }

// console.log(`Am I adult? - ${myAnswer}`);

// const myColors = ['green', 'yellow', 'red'];

// const myColorTwo = myColors[1];

// if (myColorTwo === myColors[0]){
//     console.log('Go');
// }
// else if (myColorTwo === myColors[1]){
//     console.log('Get ready');
// }
// else if (myColorTwo === myColors[2]) {
//     console.log('Stop');
// }
// else {
//     console.log('Not move');
// }

// /*********************************************************** (Лишний вес с If Else) *************************************
// ****************************/
// // console.log('(Лишний вес с If Else)');

// // const weight = prompt('Enter your weight in kilograms');
// // const height = prompt('Enter your height in meters');

// // const bodyMassIndex = weight / Math.pow(height, 2);
// // const areYouOverWeight = bodyMassIndex >= 25;

// // if (areYouOverWeight){
// //     console.log(`Yes, your BMI more than normal by ${bodyMassIndex - 25} `);
// //     alert(`Yes, your BMI more than normal by ${bodyMassIndex - 25} `);
// // }
// // else {
// //     console.log('No, your weight is normal');
// //     alert('No, your weight is normal');
// // }

// /*********************************************************** (Truthy & Falsy Values) *************************************
// ****************************/
// console.log('(Truthy & Falsy Values)');
// //JavaScript falsy values:
// // 0, '', undefined, null, NaN
// console.log(Boolean(0)); // false
// console.log(Boolean('')); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(NaN)); // false

// console.log(Boolean(32)); // true
// console.log(Boolean('hi')); // true
// console.log(Boolean([])); // true
// console.log(Boolean({})); // true
// console.log(Boolean(3.5)); // true

// /*********************************************************** (Boolean Logical Operators) *************************************
// ****************************/
// console.log('(Boolean Logical Operators)');
// // AND OR NOT
// // AND
// console.log('AND');
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && false); // false

// console.log('OR');
// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || false); // false

// console.log('NOT');
// console.log(!true); // false
// console.log(!false); // true

// /*********************************************************** (Switch Statement) *************************************
// ****************************/
// console.log('(Switch Statement)');
// const month = 'Oktober';
// switch(month) {
//     case 'December': case 'January': case'February':
//         console.log('Winter');
//         break;
//     case 'November': case 'Oktober': case 'September':
//         console.log('Autumn');
//         break;
//     case 'March': case 'April': case 'May':
//         console.log('Spring');
//         break;
//     case 'June': case 'July': case 'August':
//         console.log('Spring');
//         break;
//     default:
//         console.log('Unknown');
// }

// /*********************************************************** (Statements & Expressions) *************************************
// ****************************/
// console.log('(Statements & Expressions)');
// // Expressions
// 2+2
// 37
// true && false

// // Statements
// if (true) {
//     const text = 'The number is positive';
// }

// /*********************************************************** (Ternary Operator Тернарный оператор) *************************************
// ****************************/
// console.log('(Ternary Operator Тернарный оператор)');
// const money = 50;
// const cost = 10;

// money >= cost ? console.log('You can buy it') : console.log('You can\'t buy it');

// const canYouBuyIt = money >= cost ? 'You can buy it' : 'You can\'t buy it';
// console.log(canYouBuyIt);

// let canYouBuyItOne;
// if (money >= cost) {
//     canYouBuyItOne = 'You can buy it';
// }
// else {
//     canYouBuyItOne = 'You can\'t buy it';
// }
// console.log(canYouBuyItOne);

// console.log(`You can${ money >= cost ? ' buy' : '\'t buy'} it`);

// /*********************************************************** (Ternary Operator Task Тернарный оператор задание) *************************************
// ****************************/
// // console.log('(Ternary Operator Task Тернарный оператор задание)');
// // const myAgeTree = prompt('Enter your age');
// // const myAdult = 18;
// // console.log(`You can${myAgeTree >= myAdult ? ' buy' : '\'t buy'} alcogol`);
// // alert(`You can${myAgeTree >= myAdult ? ' buy' : '\'t buy'} alcogol`);

// /*********************************************************** (Strict mode Строгий режим) *************************************
// ****************************/
// console.log('(Strict mode Строгий режим)');
// 'use strict';
// let hasCertificate = false;
// const pathExam = true;
// if (pathExam) {
//     hasCertificate = true;
// }

// if(hasCertificate) {
//     console.log('Super!');
// }

// // const interface = 'Video';
// // const package = 'MyPackage';

// /*********************************************************** (Functions) *************************************
// ****************************/
// console.log('(Functions)');

// function PrintHello() {
//     console.log('Hello');
// }
// PrintHello();

// function Colorizer(item, color) {
//     console.log(`Your ${item} is ${color}`);
// }

// Colorizer('desc', 'red');

// function ColorizerTwo(item, color) {
//     const colorizedItem = `The ${item} is ${color}`;
//     console.log(colorizedItem);
// }

// ColorizerTwo('door', 'green');

// function ColorizerTree(item, color) {
//     const colorizedItem = `The ${item} is ${color}`;
//     return colorizedItem;
// }

// const messageFromColorizerTree = ColorizerTree('tree', 'yellow');
// console.log(`You have following message: ${messageFromColorizerTree}`);

// /*********************************************************** (Functions. Declaration vs Expression) *************************************
// ****************************/
// console.log('(Functions. Declaration vs Expression)');
// // Declaration
// function getAge(birthYear, yearNow) {
//     return yearNow - birthYear;
// }

// const myAgeTreeTwo = getAge(1990, 2022);
// console.log(myAgeTreeTwo);

// //Expression

// const getAgeTwo = function (birthYear, yearNow) {
//     return yearNow - birthYear;
// }

// const myAgeTreeThree = getAgeTwo(1990, 2022);
// console.log(myAgeTreeThree);
// console.log(`${myAgeTreeThree}`);

// /*********************************************************** (Arrow Functions) *************************************
// ****************************/
// console.log('(Arrow Functions)');

// const getAgeThree = (birthYear, yearNow) => yearNow - birthYear;

// const myAgeFour = getAgeThree(1990, 2022);
// console.log(myAgeFour);
// console.log(`${myAgeFour}`);

// const getAgeFour = birthYear => birthYear;

// const myAgeFive = getAgeFour(1990);
// console.log(myAgeFive);
// console.log(`${myAgeFive}`);

// const isCanByAlcogol = (birthYear, yearNow) => {
//     const age = yearNow - birthYear;
//     const isPersonOlderThan18 = age >= 18 ? true : false;
//     return isPersonOlderThan18;
// }

// console.log(isCanByAlcogol(1990, 2022));
// console.log(`${isCanByAlcogol(1990, 2022)}`);

// /*********************************************************** (Functions Calling Other Functions) *************************************
// ****************************/
// console.log('(Functions Calling Other Functions)');

// function ColorMixer(colorOne, colorTwo){
//     const newColor = `${colorOne} + ${colorTwo}`;
//     return newColor;
// }

// function ColorizerTree(item, colorOne, colorTwo) {
//     const color = ColorMixer(colorOne, colorTwo);
//     const colorizedItem = `The ${item} is ${color}.`;
//     return colorizedItem;
// }

// const colorizerDoor = ColorizerTree('door', 'green', 'yellow');
// console.log(colorizerDoor);

// /*********************************************************** (Функция.Задание) *************************************
// ****************************/
// console.log('(Функция.Задание)');
// // Sales Departments Task
// // There are two sales departments - Dept 1 and Dept 2.
// // You need to estimate quarter sales.
// // To do this, you need to calculate the average sales per month in quarter for each department.

// // 1.	Create an arrow function getAverage to calculate the average sales per month in quarter.
// // 2.	Use the getAverage function to calculate the average for each department.
// // 3.	Create a function printBonus that takes the average sales of each department as parameters: printBonus(dept1AverSales, dept2AverSales). If sales of one department  are at least 30% higher than sales of another one, the function should calculate a bonus for the winner in percentage of that difference and log this to the console. For instance, if Dept 1 has 35% more sales, the function should log the following to the console: ‘Dept 1 will get a bonus of 35%’.
// // 4.	Use the printBonus function with two data sets below.

// // The first quarter
// // 	January	February	March
// // Dept 1	35467	29842	38501
// // Dept 2	70533	50121	33899

// // The second quarter
// // 	April	May	June
// // Dept 1	50301	21984	19207
// // Dept 2	72381	41562	29465

// // If a > b
// // c = a - b
// // p = c / b * 100
// const getAgeQuarter = (salesMonth, salesMonthTwo, salesMonthThree) => (salesMonth + salesMonthTwo + salesMonthThree) / 3;
// // First Quarter
// const deptOneSalesAVGFirstQuarter = getAgeQuarter(35467, 29842, 38501);
// const deptTwoSalesAVGFirstQuarter = getAgeQuarter(70533, 50121,	33899);
// console.log(`${deptOneSalesAVGFirstQuarter}, ${deptTwoSalesAVGFirstQuarter}`);
// //Second Qarter
// const deptOneSalesAVGSecondQuarter = getAgeQuarter(50301, 21984, 19207);
// const deptTwoSalesAVGSecondQuarter = getAgeQuarter(72381, 41562, 29465);
// console.log(`${deptOneSalesAVGSecondQuarter}, ${deptTwoSalesAVGSecondQuarter}`);

// const difference = (deptOneSalesAVG, deptTwoSalesAVG) => deptOneSalesAVG - deptTwoSalesAVG;

// // const percent = (differenceSales, deptSalesAVG) => differenceSales / deptSalesAVG * 100;
// // **********or*********************
// const percent = function(differenceSales, deptSalesAVG) {
//     const percentSales = differenceSales / deptSalesAVG * 100;
//     return percentSales;
// }

// const printBonus = function (deptOneSalesAVG, deptTwoSalesAVG) {
//     if ( deptOneSalesAVG > deptTwoSalesAVG && deptOneSalesAVG >= 1.3 * deptTwoSalesAVG ){
//         const differenceSales = difference(deptOneSalesAVG, deptTwoSalesAVG);
//         const percentSales = percent(differenceSales, deptTwoSalesAVG);

//         console.log(`Dept 1 will get a bonus of ${percentSales}%`);
//     }
//     else if ( deptTwoSalesAVG > deptOneSalesAVG && deptTwoSalesAVG >= 1.3 * deptOneSalesAVG ){
//         const differenceSales = difference(deptTwoSalesAVG, deptOneSalesAVG);
//         const percentSales = percent(differenceSales, deptOneSalesAVG);

//         console.log(`Dept 2 will get a bonus of ${percentSales}%`);
//     }
//     else {
//         console.log('No bonus in this quarter');
//     }
// }

// printBonus(deptOneSalesAVGFirstQuarter, deptTwoSalesAVGFirstQuarter);
// printBonus(deptOneSalesAVGSecondQuarter, deptTwoSalesAVGSecondQuarter);

// /*********************************************************** (Arrays) *************************************
// ****************************/
// console.log('(Arrays)');

// const rainbowColors = ['red', 'green', 'orange', 'indigo', 'violet', 'blue'];
// console.log(rainbowColors);

// rainbowColors[rainbowColors.length] = 'dark blue';
// console.log(rainbowColors);

// console.log(rainbowColors[6]);

// const emptyArray = [];
// console.log(emptyArray);

// const emptyArrayNumbers = new Array();
// console.log(emptyArrayNumbers);

// const arrayNumbers = new Array(1, 2, 3, 4);
// console.log(arrayNumbers);

// const arrayAnys = ['string', true, 1, new Date()];
// console.log(arrayAnys);

// // Arrow Function
// const arrayFunctionArrow = (numArrays, numArraysTwo) => numArrays[0] + numArraysTwo[0] * numArrays[1] + numArraysTwo[1] * numArrays[2] + numArraysTwo[2];
// console.log('Arrow Function is ', arrayFunctionArrow([1, 2, 3], [4, 5, 6]));

// // Declaration function
// function arrayFunctionDeclaration(numArrays, numArraysTwo) {
//     const num = numArrays[0] + numArraysTwo[0] * numArrays[1] + numArraysTwo[1] * numArrays[2] + numArraysTwo[2];
//     return num;
// }

// console.log('Declaration Function is ', arrayFunctionDeclaration([1, 2, 3], [4, 5, 6]));

// // Expression function
// const arrayFunctionExpression = function(numArrays, numArraysTwo) {
//     const num = numArrays[0] + numArraysTwo[0] * numArrays[1] + numArraysTwo[1] * numArrays[2] + numArraysTwo[2];
//     return num;
// }

// console.log('Expression Function is ', arrayFunctionExpression([1, 2, 3], [4, 5, 6]));

// /*********************************************************** (Array Methods) *************************************
// ****************************/
// console.log('(Array Methods)');
// const arrNumbers = [10, 9, 8, 7, 20, 30];
// let result;
// let result2;

// result = arrNumbers.length; // 6
// result = arrNumbers.indexOf(20); // 4

// // push(), pop()
// result = arrNumbers.push(40); // 7

// console.log(result); // 7
// console.log(arrNumbers); // [10, 9, 8, 7, 20, 30, 40]

// result2 = arrNumbers.pop(); // 40
// console.log('result2 is ', result2); // 40
// console.log(arrNumbers); // [10, 9, 8, 7, 20, 30]

// // unshift(), shift()
// result = arrNumbers.unshift(3); // [3, 10, 9, 8, 7, 20, 30]
// console.log(arrNumbers); //[3, 10, 9, 8, 7, 20, 30]

// result = arrNumbers.shift(); // [10, 9, 8, 7, 20, 30]
// console.log(arrNumbers); // [10, 9, 8, 7, 20, 30]

// result = arrNumbers.push(50, 60, 70); // [10, 9, 8, 7, 20, 30, 50, 60, 70] added in Last: 50, 60, 70
// console.log(arrNumbers); // [10, 9, 8, 7, 20, 30, 50, 60, 70]

// result = arrNumbers.unshift(1, 2, 3); // [1, 2, 3, 10, 9, 8, 7, 20, 30, 50, 60, 70]  added in First: 1, 2, 3
// console.log(arrNumbers); // [1, 2, 3, 10, 9, 8, 7, 20, 30, 50, 60, 70]

// // splice()
// result = arrNumbers.splice(3, 1); // [1, 2, 3, 9, 8, 7, 20, 30, 50, 60, 70]  deleted: 10
// console.log(arrNumbers); // [1, 2, 3, 9, 8, 7, 20, 30, 50, 60, 70]

// result = arrNumbers.splice(5, 4); // [1, 2, 3, 9, 8, 60, 70]  deleted: 7, 20, 30, 50
// console.log(arrNumbers); // [1, 2, 3, 9, 8, 60, 70]

// // slice()
// result = arrNumbers.slice(4, 6); // [8, 60]
// console.log(result); // [8, 60]
// console.log(arrNumbers); // [1, 2, 3, 9, 8, 60, 70]

// // concat()
// result = arrNumbers.concat(result); // [1, 2, 3, 9, 8, 60, 70, 8, 60]  joined: 8, 60
// console.log(result); // [1, 2, 3, 9, 8, 60, 70, 8, 60]
// console.log(arrNumbers); // [1, 2, 3, 9, 8, 60, 70]

// result = arrNumbers.reverse(); // [70, 60, 8, 9, 3, 2, 1]
// console.log(result); // [70, 60, 8, 9, 3, 2, 1]
// console.log(arrNumbers) // [70, 60, 8, 9, 3, 2, 1]

// /*********************************************************** (Array Tasks) *************************************
// ****************************/
// console.log('(Array Tasks)');
// // Tips Calculator Task
// // You have to build a tips calculator.
// // The calculator should calculate tips in following manner:
// // If the bill value is less than 20, tips should be 20%. In other cases tips should be 15%.

// // 1.	Create an arrow function calculateTips(), that takes a bill parameter and returns the corresponding tips.
// // 2.	Create an array of bills with test data below.
// // 3.	Create an array of tips for each bill.
// // 4.	Create an array of total bills, that is bill + tips.

// // Test data: 11, 20, 47.

// const calculateTips = bill => bill < 20 ? bill * 0.2 : bill * 0.15;

// const bills = [11, 20, 47];
// const tips = [calculateTips(bills[0]), calculateTips(bills[1]), calculateTips(bills[2])];
// const totalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(`Bills: ${bills}, Tips: ${tips}, TotalBills: ${totalBills}`);  //Bills: 11, 20, 47, Tips: 2.2, 3, 7.05, TotalBills: 13.2, 23, 54.05

// /*********************************************************** (Objects) *************************************
// ****************************/
// console.log('(Objects)');
// myData = [
//     'Sergey',
//     'Fadin',
//     1992,
//     'programmer',
// ['bike', 'car', 'plane']];

// console.log(myData[4]);

// sergeyObject = {
//     nameObj: 'Sergey',
//     lastNameObj: 'Fadin',
//     birthYearObj: 1992,
//     jobObj: 'programmer',
//     hobbiesObj: ['bike', 'car', 'plane']
// };

// console.log(sergeyObject);

// /*********************************************************** (Objects Dot vs Bracket Notation) *************************************
// ****************************/
// console.log('(Objects Dot vs Bracket Notation)');

// // Dot notation we can't use expression
// console.log(sergeyObject.nameObj); // Sergey

// // Bracket notation we can use expression
// console.log(sergeyObject['nameObj']); // Sergey

// const baseName = 'NameObj';
// console.log(sergeyObject['last' + baseName]); // Fadin

// // const userInput = prompt('What do you want about Sergey? Choose between nameObj, lastNameObj, birthYearObj, jobObj, hobbiesObj');

// // if(sergeyObject[userInput]) {
// //     console.log(sergeyObject[userInput]);
// // }
// // else {
// //     console.log('This property does not exist! Choose between nameObj, lastNameObj, birthYearObj, jobObj, hobbiesObj');
// // }

// // Add new properties in Object
// sergeyObject.location = 'Russia';
// const telegram = 'telegram';
// sergeyObject[telegram] = '@SergeyF8';
// console.log(sergeyObject);

// //challenge
// //'Sergey has 3 hobbies and the first one is bike'
// console.log(`${sergeyObject.nameObj} has ${sergeyObject.hobbiesObj.length} hobbies and the first one is ${sergeyObject.hobbiesObj[0]}`); // Sergey has 3 hobbies and the first one is bike

// /*********************************************************** (Object Methods) *************************************
// ****************************/
// console.log('(Object Methods)');
// sergeyObject2 = {
//     nameObj2: 'Sergey',
//     lastNameObj2: 'Fadin',
//     birthYearObj2: 1992,
//     jobObj2: 'programmer',
//     hobbiesObj2: ['bike', 'car', 'plane'],
//     hasDriverLicense2: true,
//     calcAge2: function(birthYearObj2) {
//         return new Date().getFullYear() - birthYearObj2;
//     }
// };

// console.log(sergeyObject2.calcAge2(1992)); // 30
// console.log(sergeyObject2['calcAge2'](1992)); // 30

// //---------------or------------------
// sergeyObject3 = {
//     nameObj3: 'Sergey',
//     lastNameObj3: 'Fadin',
//     birthYearObj3: 1992,
//     jobObj3: 'programmer',
//     hobbiesObj3: ['bike', 'car', 'plane'],
//     hasDriverLicense3: true,
//     calcAge3: function() {
//         return new Date().getFullYear() - this.birthYearObj3;
//     }
// };

// console.log(sergeyObject3.calcAge3()); // 30
// console.log(sergeyObject3['calcAge3']()); // 30

// //---------------or правильный подход------------------
// sergeyObject4 = {
//     nameObj4: 'Sergey',
//     lastNameObj4: 'Fadin',
//     birthYearObj4: 1992,
//     jobObj4: 'programmer',
//     hobbiesObj4: ['bike', 'car', 'plane'],
//     hasDriverLicense4: true,
//     calcAge4: function() {
//         this.age4 = new Date().getFullYear() - this.birthYearObj4;
//     },
//     getSummary4: function() {
//         this.fullSummary4 = `${this.nameObj4} is a ${this.age4}-year old ${this.jobObj4} and he has ${this.hasDriverLicense4 ? 'a' : 'a no'} driver license`;
//     }
// };

// sergeyObject4.calcAge4(); // 30
// console.log(sergeyObject4.age4); // 30
// console.log(sergeyObject4['age4']); // 30

// // Challenge

// // 'Sergey is a 30-year old programmer and he has a/no driver license'
// sergeyObject4.getSummary4();
// console.log(sergeyObject4.fullSummary4); // Sergey is a 30-year old programmer and he has a driver license

// /*********************************************************** (Object Tasks) *************************************
// ****************************/
// console.log('(Object Tasks)');
// // Let's go back to the BMI index! This time, we'll use objects to do the calculations!
// // BMI = weight / height ** 2 = weight / (height * height) (weight in kg and height in meters)
// // Your task:
// // We have two friends - Jack and Mike
// // 1. For each of them, create an object with properties of its first name, last name, weight and height (Jack White and Mike Black).
// // 2. Create a BMI calculation method for each object to calculate BMI (same method for both objects). Store the BMI value in a property and also return it from the method.
// // 3. Log into the console who has the higher BMI, also the full name and the corresponding BMI. Example: "Jack White BMI (25.7) is higher than Mike Black (22.4)!"
// // Test Data: Jack weight 79 kg, height 1.70 m. Mike weighs 91 kg and his height is 1.93 m.

// const jackObj = {
//     firstName: 'Jack',
//     lastName: 'White',
//     weight: 79,
//     height: 1.70,
//     getBMI: function() {
//         this.bmi = this.weight / Math.pow(this.height, 2);
//         return this.bmi;
//     }
// }
// const mikeObj = {
//     firstName: 'Mike',
//     lastName: 'Black',
//     weight: 91,
//     height: 1.93,
//     getBMI: function() {
//         this.bmi = this.weight / Math.pow(this.height, 2); // правильне без возврата
//     }
// }

// jackObj.getBMI();
// mikeObj.getBMI();
// console.log(`${jackObj.bmi > mikeObj.bmi ?
//     (jackObj.firstName + ' ' + jackObj.lastName +
// ' BMI' + '(' + jackObj.bmi + ') is higher than ' + mikeObj.firstName + ' ' + mikeObj.lastName + ' (' + mikeObj.bmi + ')!') :
// (mikeObj.firstName + ' ' + mikeObj.lastName + ' BMI' + '(' + mikeObj.bmi + ') is higher than ' +
//  jackObj.firstName + ' ' + jackObj.lastName) + ' (' + jackObj.bmi + ')!' } `); // Jack White BMI(27.33564013840831) is higher than Mike Black (24.43018604526296)!

//  //--------------- or---------------
// if (jackObj.bmi > mikeObj.bmi) {
//     console.log (`${jackObj.firstName} ${jackObj.lastName} BMI(${jackObj.bmi}) is higher than ${mikeObj.firstName} ${mikeObj.lastName} (${mikeObj.bmi})!`);
// }
// else if (jackObj.bmi < mikeObj.bmi) {
//     console.log (`${mikeObj.firstName} ${mikeObj.lastName} BMI(${mikeObj.bmi}) is higher than ${jackObj.firstName} ${jackObj.lastName} (${jackObj.bmi})!`);
// }
// else {
//     console.log (`${jackObj.firstName} ${jackObj.lastName} and ${mikeObj.firstName} ${mikeObj.lastName} BMI(${jackObj.bmi}) is equal!`);
// }

// /*********************************************************** (For loop) *************************************
// ****************************/
// console.log('(For loop)');

// for(let x = 0; x < 10; x++) {
//     console.log(`x${x} = ${x}`);
// }

// /*********************************************************** (Циклы и Массивы) *************************************
// ****************************/
// console.log('(Циклы и Массивы)');
// const arrInfo = ['Sergey', 'Fadin', 1992, 'developer', ['car', 'plane', 'bike']];
// const types = [];
// for(let i = 0; i < arrInfo.length; i++) {
//     console.log(arrInfo[i], typeof arrInfo[i]);
//     //types[i] = typeof arrInfo[i]; // ['string', 'string', 'number', 'string', 'object']
//     //types.push(typeof arrInfo[i]); // ['string', 'string', 'number', 'string', 'object']
//     types.unshift(typeof arrInfo[i]); // ['object', 'string', 'number', 'string', 'string']
// }

// console.log(types);

// const arrBirthYears = [1992, 2002, 2012, 2022];
// const arrAges = [];
// for(let i = 0; i < arrBirthYears.length; i++){
//     arrAges.push(new Date().getFullYear() - arrBirthYears[i]);
// }

// console.log(arrAges);

// /*********************************************************** (Break and Continue) *************************************
// ****************************/
// console.log('(Break and Continue)');
// const arrInfo2 = ['Sergey', 'Fadin', 1992, 'developer', ['car', 'plane', 'bike']];

// for(let i = 0; i < arrInfo2.length; i++) {
//     if (typeof arrInfo2[i] !== 'string') {
//         continue;
//     }
//     console.log(arrInfo2[i], typeof arrInfo2[i]);
// }

// const arrInfo3 = ['Sergey', 'Fadin', 1992, 'developer', ['car', 'plane', 'bike']];

// for(let i = 0; i < arrInfo3.length; i++) {
//     if (typeof arrInfo3[i] === 'number') {
//         break;
//     }
//     console.log(arrInfo3[i], typeof arrInfo3[i]);
// }

/*********************************************************** (Итерация в обратном порядке. Циклы в циклах) *************************************
 ****************************/
console.log('(Итерация в обратном порядке. Циклы в циклах)');

const arrInfo4 = [
  'Sergey',
  'Fadin',
  1992,
  'developer',
  ['car', 'plane', 'bike'],
];

// for(let i = arrInfo4.length-1; i >= 0; i--) {
//     console.log(arrInfo4[i], typeof arrInfo4[i]);
// }

// for(let exercise = 1; exercise <= 3; exercise++){
//     console.log(`Exercise ${exercise}`);

//     for(let rep = 1; rep <= 5; rep++){
//         console.log(`Rep ${rep}`);
//     }
// }

/*********************************************************** (While loop) *************************************
 ****************************/
console.log('(While loop)');

// let repMy = 1;

// while(repMy <= 10) {
//     console.log(`Push ups repetition ${repMy}`);
//     repMy++;
// }

// let diceNumber = Math.trunc(Math.random() * 6) + 1;
// console.log(`DiceNumber = ${diceNumber} before loop:`);

// while (diceNumber !==6) {
//     console.log(diceNumber);
//     diceNumber = Math.trunc(Math.random() * 6) + 1;
//     console.log(`DiceNumber = ${diceNumber} inside in loop`);
// }

/*********************************************************** (Loops Task) *************************************
 ****************************/
console.log('(Loops Task)');
// Your tasks:
// 1. Create the bills array containing all 10 test bill values.
// 2. Create empty arrays for the tips and the totals (tips and totals)
// 3. Use the calculateTips() function we wrote before to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform 10 calculations.
// Test data: 31, 95, 276, 540, 27, 205, 11, 1180, 96, 57.
// Call calculateTips() in the loop and use the push() method to add values to the tips and totals arrays.
// 4. Write a calculateAverage() function that takes an array called arr as a parameter. This function calculates the average of all numbers in a given array. This is a difficult task! Here's how to solve it:
// 4.1. First, you will need to add all the values in the array. To do the addition, start by creating a variable “sum” that starts at 0. Then loop through the array using a for loop. At each iteration, add the current value to the sum variable. Thus, by the end of the loop, all values will be added together.
// 4.2. To calculate the average, divide the sum you calculated earlier by the length of the array (because that's the number of elements).
// 4.3. Call calculateAverage() with totals array.

const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];
const tips = [];
const totals = [];

// const calculateTips = bill => bill < 20 ? bill * 0.2 : bill * 0.15;

// for (let i = 0; i < bills.length; i++) {
//     tips.push(calculateTips(bills[i]));
//     totals.push(bills[i] + tips[i]);
// }

// const calculateAverage = function(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum/arr.length;
// }

// console.log(calculateAverage([1, 2, 3, 4]));
// console.log(calculateAverage(totals));
// console.log(calculateAverage(bills));
// console.log(calculateAverage(tips));

/*********************************************************** (Отладка кода) *************************************
 ****************************/
console.log('(Отладка кода)');
// const celciusToKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celcius',
//     value: Number(prompt('Temperature in Celcius: ')),
//   };
//   console.log(measurement.value);
//   console.table(measurement);
//   console.warn(measurement.value);
//   console.error(measurement.value);
//   debugger;

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(celciusToKelvin());

/*********************************************************** (Отладка кода) *************************************
 ****************************/
console.log('(Отладка кода)');
// The weather forecast app displays a string with forecasted humidities from a given array.
// Example
// [49, 51, 63] will display " ... 49% humidity in 1 days ... 51% humidity in 2 days ... 63% humidity in 3 days ..."
// 1.	Create  a function printHumiditiesForecast(), which takes an array as a parameter and logs a string like the above to the console. Try it with both test datasets.
// 2.	Use the problem-solving framework: understand the problem and divide it into sub-problems!
// Data1: [49, 51, 63]
// Data2: [31, 29, 43, 58, 52]

const data1 = [49, 51, 63];
const date2 = [31, 29, 43, 58, 52];

// const printHumiditiesForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `... ${arr[i]}% humidity in ${i + 1} days ...`;
//   }
//   console.log(str);
// };

// printHumiditiesForecast(data1);

/*********************************************************** (Отладка кода) *************************************
 ****************************/
console.log('(Отладка кода)');
