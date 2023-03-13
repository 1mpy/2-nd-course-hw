// Задание 1

// function compare(a, b) {
//     if (a < b) {
//         return a;
//     }
//     return b;
// }
// console.log(compare(8, 4));


// Задание 2

// const evenOdd = function (num) {
//     if (num % 2 === 0) {
//         return 'Число четное';
//     } else {
//         return 'Число нечетное';
//     }
// };

// console.log(evenOdd(-13));


// Задание 3

// Задание 3.1. 

// let squareFunc = (num) => {
//     let result = num ** 2;
//     return result;
// }

// console.log(squareFunc(22));


// Задание 3.2. 

// let squareFunc = (num) => {
//     let result = num ** 2;
//     return result;
// };


// Задание 4

// let age = prompt("Сколько Вам лет?", 18);

// if (age > 0 && age <= 12 ) {
//     function mssg() {
//         alert("Привет, друг!");
//     }
// } else if (age >= 13) {
//     function mssg() {
//         alert("Добро пожаловать!");
//     }
// }
// else  {
//     function mssg() {
//         alert("Вы ввели неправильное значение");
//     }
// }
// mssg();


// Задание 5

// function compare(a, b) {
//     if (isNaN(a) == true || isNaN(b) == true) {
//         return 'Одно или оба значения не являются числом';
//     } else {
//         return a * b;
//     }    
// }

// console.log(compare('123', '2'));
// console.log(compare('sdfgwe4rt', '2'));


// Задание 6

// let num = prompt("Назовите число");

// function numAsk(num) {
//     if (isNaN(num) != true) {
//         let result = num ** 3;
//         return `n в кубе равняется ${result}`;
//     } else {
//         return 'Переданный параметр не является числом';
//     }
// }
// console.log(numAsk(num));


// Задание 7

// let monthNumber = prompt("Назовите число");

// function season(monthNumber) {
//     if (monthNumber == 1 || monthNumber == 2 || monthNumber == 12) {
//         return 'Зима';
//     } else if (monthNumber >= 3 && monthNumber <= 5) {
//         return 'Весна';
//     } else if (monthNumber >= 6 && monthNumber <= 8) {
//         return 'Лето';
//     } else if (monthNumber >= 9 && monthNumber <= 11) {
//         return 'Осень';
//     } else {
//         console.log('вы ввели не число');
//     }
// }
// console.log(season(monthNumber));