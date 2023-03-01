function getLastDayOfMonth(year, month) {
    let thisMonth = new Date(year, month, 1);
    let nextMonth = new Date(year, month + 1, 1);
  
    return Math.trunc((nextMonth - thisMonth) / 24 / 3600 / 1000);
  }
  
  console.log(getLastDayOfMonth(2012, 1));
  