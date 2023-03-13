// Задание 1

// Задание 1.1

// let arr = [4, 15, -3, 4, 52, 15, 1, -8, 2, 1];
// function getResult(arr, sum){
//     return sum(arr);
// }

// function sum(arr) { 
//     let result = 0;   
//     for (i = 0; i < arr.length; i++){        
//     result += arr[i];        
// }
// return result;
// }

// console.log(sum(arr));

// Задание 1.2

// function getResult(arr, mult){
//     return mult(arr);
// }

// function mult(arr) { 
//     let result = 1;   
//     for (i = 0; i < arr.length; i++){        
//     result *= arr[i];        
// }
// return result;
// }

// console.log(mult(arr));


// Задание 2

// const users = [
// 	{name: 'Jon', age: 22},
// 	{name: 'Richard', age: 18},
// 	{name: 'Anton', age: 32},
// 	{name: 'Lida', age: 23},
// 	{name: 'Bob', age: 44}
// ];

// function getSortedArrayObj() {
//     users.sort(compareUser);
//     console.log(users);
// }

// function compareUser(a, b) {
//     if (a.age > b.age) return 1;
//     if (a.age < b.age) return -1;
//     return 0;
// }

// getSortedArrayObj(users);


// Задание 3

// Задание 3.1

// const arr = [1, '4', 9, 'two'];

// function each(arr, reversArr) {
//     console.log(reversArr(arr));
//     return reversArr(arr);
// }

// function reversArr() {
//     let result = arr.reverse();
//     return result;
// }
// each(arr, reversArr); // ['two', 9, '4', 1]

// Задание 3.2

// const arr = [1, '4', false, 9, 'two'];

// function each(arr, toNumberArr) {
//     console.log(toNumberArr(arr));
//     return toNumberArr(arr);
// }

// function toNumberArr(arr) {
//     let result = [];
//     for (i = 0; i < arr.length; i++) {
//         for (i = 0; i < arr.length; i++) {
//             if (isNaN(Number(arr[i])) == false)
//                 result.push(Number(arr[i]));
//         }
//         return result;
//     }
// }

// each(arr, toNumberArr);


// Задание 4

// let currentDate = new Date();
// let timerId = setInterval(() => console.log(new Date), 3000);
// setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);


// Задание 5

// function calling() {
//   console.log('Звоню!');
// }

// function beeps(talk) {
//   setTimeout(() => {
//     console.log('Идут гудки...');
//     talk();
//   }, 1000);
// }

// function talk() {
//   console.log('Разговор');
// }

// calling();
// beeps(talk);