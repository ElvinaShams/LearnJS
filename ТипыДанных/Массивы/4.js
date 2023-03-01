function sumInput() {
    let arr = [];
    let sum = 0;
  
    for (let i = 0; i <= arr.length; i++) {
      let num = prompt("Введите значение", "");
  
      if (num == null || !isFinite(num) || num == "") break;
  
      arr.push(+num);
      sum += arr[i];
    }
    return sum;
  }
  
  console.log(sumInput());
  