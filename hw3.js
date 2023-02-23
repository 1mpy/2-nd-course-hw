// Задание 1

// let password = 'parmpampam';
// let question = prompt('Введите пароль');
// if (password === question) {
//     alert ('Пароль введен верно');
// } else {
//     alert ('Пароль введен неправильно');
// }


// Задание 2

// let c = 1090;
// let c = 0;
// let c = 10;
// let c = -3;
// let c = 2;
// if (c > 0 && c < 10) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }


// Задание 3

// let d = 344;
// let e = -5698;
// if (d > 100 || e > 100) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }


// Задание 4

// let a = Number('2');
// let b = Number('3');
// alert (a + b);


// Задание 5

// let monthNumber = prompt('введите номер месяца');
// switch (monthNumber) {
//     case '1':
//     case '2':
//     case '12':
//         console.log('зима');
//         break;
//     case '3':
//     case '4':
//     case '5':
//         console.log('весна');
//         break;
//     case '6':
//     case '7':
//     case '8':
//         console.log('лето');
//         break;
//     case '9':
//     case '10':
//     case '11':
//         console.log('осень');
//         break;
//     default:
//         console.log('такого месяца не существует!');
//         break;
// }


// Задание 6. Работа с макетом
// Создайте адаптивную версию вашего сайта и добавьте эффекты наведения.


// Задание 7

// let num = prompt('Пожалуйста, введите любое число');
// num = Number(num);
// let checkNum = isNaN(num);
// if (checkNum != true) {
//     if (num % 2 === 0) {
//         alert('Число четное');
//     } else {
//         alert('Число нечетное');
//     }
// }else {
//     alert('вы ввели не число');
// }


// Задание 8

// «Установите версию приложения для Android по ссылке».
// let clientOS = 1;
// if (clientOS === 0) {
//     console.log('Установите версию приложения для iOS по ссылке');
// } else {
//     console.log('Установите версию приложения для Android по ссылке');
// }


// Задание 9

// let clientOS = 0; //(0 — iOS, 1 — Android)
// let clientDeviceYear = 2000;
// if (clientOS === 0) {
//     if (clientDeviceYear >= 2015) {
//         console.log('Установите версию приложения для iOS по ссылке');
//     } else {
//         console.log('Установите облегченную версию приложения для iOS по ссылке');
//     }
// } else {
//     if (clientDeviceYear >= 2015) {
//         console.log('Установите версию приложения для Android по ссылке');
//     } else {
//         console.log('Установите облегченную версию приложения для Android по ссылке');
//     }
// }