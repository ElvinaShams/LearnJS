function formatDate(date) {
    let fullDate = String(date).split(" ");
    fullDate =
      fullDate[2] +
      "." +
      (date.getMonth() + 1) +
      "." +
      fullDate[3] +
      " " +
      fullDate[4].slice(0, 5);
  
    let now = new Date();
    let diff = Math.floor((now - date) / 1000);
    if (diff < 1) return "прямо сейчас";
    if (diff < 1 * 60) return `${diff} сек. назад`;
    if (diff < 1 * 60 * 60) return `${diff / 60} мин. назад`;
    return fullDate;
  }
  alert(formatDate(new Date(new Date() - 5 * 60 * 1000)));