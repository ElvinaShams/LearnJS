function getMaxSubSum(array) {
  let sum = 0;
  let maxSum = 0;

  for (let key of array) {
    if (key + sum > 0) {
      sum += key;

      if (sum > maxSum) {
        maxSum = sum;
      }
    } else sum = 0;
  }
  return maxSum;
}
alert(getMaxSubSum([-1, 2, 3, -9])); // 5
alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
alert(getMaxSubSum([-2, -1, 1, 2])); // 3
alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100
alert(getMaxSubSum([1, 2, 3])); // 6
