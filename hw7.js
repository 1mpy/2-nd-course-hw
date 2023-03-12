// Задание 1

// let str = 'js';
// str = str.toUpperCase();
// console.log(str);


// Задание 2

// const itemList = ['Белый', 'Красный', 'Черный', 'КрАсноватый', 'оКраска'];
// const searchItem = 'крас';
// result = itemList.filter(item => item.toLowerCase().startsWith(searchItem.toLocaleLowerCase()));
// console.log(result);


// Задание 3

// let num = 32.58884;
// 3.1 До меньшего целого
// num = Math.floor(num);
// console.log(num);

// 3.2 До большего целого
// num = Math.ceil(num);
// console.log(num);

// 3.3 До ближайшего целого
// num = Math.round(num);
// console.log(num);


// Задание 4

// nums = [52, 53, 49, 77, 21, 32];
// console.log(Math.max.apply(null, nums));
// console.log(Math.min.apply(null, nums));


// Задание 5

// function randomNum(max) {
//     return Math.ceil(Math.random() * max);
// }
// console.log(randomNum(10));


// Задание 6

// num = 8;
// let arr = [];
// function func(arr) {
//     let result = [];
//     for (let i = 0; i < num / 2; i++) {
//         result.push(Math.floor(Math.random() * num) + 1);
//     }
//     return result;
// }
// console.log(func(arr));


// Задание 7

// num1 = 12;
// num2 = 25;

// function getRandomNum(num1, num2) {
//     num1 = Math.ceil(num1);
//     num2 = Math.floor(num2);
//     return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
// }
// console.log(getRandomNum(num1, num2));


// Задание 8

// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// let rightNow = new Date();
// let today = days[rightNow.getDay()] + ' ' + rightNow.getDate() + ' ' + months[rightNow.getMonth()] + ' ' + rightNow.getFullYear();
// console.log(today);


// Задание 9

// let currentDate = new Date();
// let day = currentDate.getDate(currentDate.setDate(73));
// console.log(day);

// Задание 10

// let date = new Date(2005, 8, 16, 9, 22, 17);

// function func(date) {
//     const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
//     const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
//     let result = "Дата: " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " - это " + days[date.getDay()] +' \n' + "Время: " + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
//     return result;
// }
// console.log(func(date));


// Задание 11

// let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
// list = list.sort(() => Math.random() - 0.5);
// alert(list);
// askFirst = prompt('Чему равнялся первый элемент массива?');
// askLast = prompt('Чему равнялся последний элемент массива?');

// function func(list) {
//     if (askFirst === list[0] && askLast === list[list.length - 1]) {
//         alert('Поздравляю! Вы угадали оба элемента');
//     } else if (askFirst == list[0] || askLast == list[list.length - 1]) {
//         alert('Вы были близки к победе!');        
//     } else {
//         alert('Вы ответили неверно');
//     }
// }
// console.log(func(list));





function func() {
    let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    list = list.sort(() => Math.random() - 0.5);
    alert(list);
    askFirst = prompt('Чему равнялся первый элемент массива?');
    askLast = prompt('Чему равнялся последний элемент массива?');
    if (askFirst === list[0] && askLast === list[list.length - 1]) {
        alert('Поздравляю! Вы угадали оба элемента');
    } else if (askFirst == list[0] || askLast == list[list.length - 1]) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы ответили неверно');
    }
    
}
alert(func());