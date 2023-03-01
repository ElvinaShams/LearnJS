function random(min, max) {
    let num;
    num = Math.floor(Math.random() * (max + 1 - min)) + min;
    return num;
  }
  
  console.log(random(1, 5));
  