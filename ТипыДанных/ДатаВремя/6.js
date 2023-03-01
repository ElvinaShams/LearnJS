function getSecondsToday() {
    let date = new Date();
    date.setHours(0, 0, 0, 0);
  
    return Math.floor((Date.now() - date.getTime()) / 1000);
  }
  
  console.log(getSecondsToday());
  