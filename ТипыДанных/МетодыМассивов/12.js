function unique(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(i, 1);
          i--;
        }
      }
    }
    return arr;
  }
  
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];
  
  alert(unique(strings));
  