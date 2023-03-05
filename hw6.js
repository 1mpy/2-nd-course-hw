
// Задание 1

// const arr = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i <= arr.length; i++) {    
//     console.log(arr[i]); 
//     if (arr[i] == 10) break;
// }


// Задание 2

// const arr = [1, 5, 4, 10, 0, 3];
// console.log(arr.lastIndexOf(4));


// Задание 3

// const arr = [1, 3, 5, 10, 20];
// console.log(arr.join(' '));


// Задание 4

// let arr = [];
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     // console.log(arr);
//     for (let k = 0; k < 3; k++) {
//         arr[i].push(1);
//     }
// }
// console.log(arr);


// Задание 5

// const arr = [1, 1, 1];
// arr.push(2, 2, 2);
// console.log(arr);


// Задание 6

// const arr = [9, 8, 7, 'a', 6, 5];
// arr.sort();
// // console.log(arr);
// arr.pop();
// console.log(arr);


// Задание 7

// const arr = [9, 8, 7, 6, 5];
// let askNum = Number(prompt('Введите число от 1 до 10'));
// // console.log(typeof askNum)
// let searchNum = arr.includes(askNum);
// console.log(searchNum);


// Задание 8

// let aString = 'abcdef';
// aString = aString.split('').reverse().join('');
// console.log(aString);


// Задание 9

// let arr = [[1, 2, 3, ],[4, 5, 6]];
// function func(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let k = 0; k < arr[i].length; k++) {
//             // console.log(arr[i][k]);
//             result.push(arr[i][k]);
//         }
//     }
//     return result;
// }
// console.log(func(arr));


// Задание 10

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// sum = arr[0] + arr[1];
// console.log(sum);
// for (let i = 2; i <= arr.length; i++) {
//     sum = sum + arr[i];
//     console.log(sum);
// }


// Задание 11

// let randomArr = [];
// for (let i = 0; i < 10; i++) {
//     randomArr.push(Math.floor(Math.random() * 10));
// }
// const evenArr = randomArr.filter(item => item % 2 === 0 && item !=0);
// console.log(randomArr);
// console.log(evenArr);


// Задание 12

// let randomArr = [];
// for (let i = 0; i < 6; i++) {
//     randomArr.push(Math.floor(Math.random() * 10) + 1);
// }
// let sum = 0;
// for (i = 0; i < randomArr.length; i++) {
//     sum += randomArr[i];
// }
// let result = sum / randomArr.length;
// console.log(randomArr);
// console.log(result);