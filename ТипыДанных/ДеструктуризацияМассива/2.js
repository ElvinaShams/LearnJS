let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
  };

function topSalary(salaries) {
    const arr = Object.entries(salaries);
  
    if (!arr.length) {
      return null;
    }
  
    arr.sort((a, b) => b[1] - a[1]);
  
    return arr[0][0];
  }

console.log(topSalary(salaries));
  