let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(arr) {
  let age = arr.map((user) => user.age).reduce((a, b) => a + b, 0);
  let sum = age / arr.length;
  return sum;
}
console.log(getAverageAge(arr));