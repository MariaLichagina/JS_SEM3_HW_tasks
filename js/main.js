// ***SEMINAR_3 TASKS***

// let a = 152;
// let b = 2;
// let summ1 = a + b;
// let summ2 = a * b;
// let summ3 = b / a;
// console.log(summ1, summ2, summ3);

// let name = 'Аля'
// console.log(`Hola, ${name}!`)

// let name = prompt("Ваше имя?", "Например, Мария")
// console.log(`Hola, ${name}!`)

// function helloName (name) {
//     console.log(`Hola, ${name}!`)
// }
// let name1 = prompt("Ваше имя?", "Например, Мария")
// helloName(name1)

// let res = confirm("Are you sure?");
// if (res) {
//     console.log("We're happy that you're sure!")
// } else {
//     console.log("It's a pity!");
// }

// let age = prompt("Введите Ваш возраст:");
// age = parseInt(age);

// switch (age) {
//   case 18:
//     console.log("Вы совершеннолетний, все можно!");
//     break;
//   case 10:
//     console.log("Вам надо учить уроки!");
//     break;
//   case 30:
//     console.log("Ложитесь спать, завтра на работу");
//     break;
//   default:
//     console.log("Мы не знаем что Вам делать");
// }

// ***HOMEWORK***

// Task №7
// let arr = ['apples', 'pears'];
// arr.push('bananas');
// arr.unshift('lemons', 'grapes');
// arr.sort()
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log( arr[i] );
//   }

// Task №8
// let arr = ['a', 'b', 'c'];
// console.log(arr);

// arr[0] = 'word';
// arr[1] = 'Enter your phrase here.';
// arr[2] = 'f'
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log( arr[i] );
//   }

// Task №9_option_1
// let arr = [5, 7, 3, 9, 35];
// console.log(arr);

//     for (let i = 0; i < arr.length; i++) {
//         arr[i] +=1
//         console.log( arr[i] );
//       }

// console.log(arr)

// Task №9_option_2

// function rand(min, max) {
//   if (max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   } else {
//     return Math.floor(Math.random() * (min + 1));
//   }
// }

// function array_fill_random(limit, min, max) {
//   limit = parseInt(limit);
//   min = parseInt(min);
//   max = parseInt(max);

//   arr = new Array(limit);

//   for (let i = 0; i < limit; i++) {
//     arr[i] = rand(min, max);
//   }

//   return arr;
// }

// let enter_limit = prompt("Введите длину массива: ");
// let enter_min = prompt("Введите мин. значение элемента массива: ");
// let enter_max = prompt("Введите макс. значение элемента массива: ");

// rand(enter_min, enter_max);

// p = array_fill_random(enter_limit, enter_min, enter_max);
// console.log(p);

// for (let i = 0; i < p.length; i++) {
//   p[i] += 1;
//   console.log(p[i]);
// }

// console.log(p);
