//7
let n = prompt(`Введите максимальное число`, '')
outer: for (let i = 2; i <= n; i++) {
for (let j = 2; j < i; j++) {
if (i % j == 0) continue outer;
}
console.log(a); }