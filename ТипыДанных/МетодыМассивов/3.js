let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  for (let item of arr) {
    if (item >= a && item <= b) {
      console.log(arr);
    } else {
      arr.splice(arr.indexOf(item), 1);
    }
  }
}

filterRangeInPlace(arr, 1, 4);
console.log(arr);
