function makeRandomArr(a, b) {
  return Math.random() - 0.5;
}
  
function shuffle(array) {
  array.sort(makeRandomArr);
}
    
let arr = [1, 2, 3];
shuffle(arr);
console.log(arr);
  