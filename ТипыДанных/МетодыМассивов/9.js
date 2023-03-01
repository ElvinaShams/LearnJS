function sortByAge(arr) {
    arr.sort((arr1, arr2) => arr1.age > arr2.age ? 1 : -1);
  }
  
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 28 };
  
  let arr = [ vasya, petya, masha ];
  
  sortByAge(arr);

  alert(arr[0].name); // Вася
  alert(arr[1].name); // Маша
  alert(arr[2].name); // Петя